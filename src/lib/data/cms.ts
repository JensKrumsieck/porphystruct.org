import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import { marked } from 'marked';

export function getAllPosts(postType: string) {
    try {
        const categories = getCatgories()
        const content = fs.readdirSync(path.join(path.dirname(''), `content/${postType}/`)).map((fileName) => {
            const slug = fileName.slice(0, -3);
            const file = fs.readFileSync(
                path.resolve(path.join(path.dirname(''), `content/${postType}/`), fileName),
                'utf-8'
            );
            // @ts-ignore
            const { data, content } = grayMatter(file);
            let text = getExcerpt(content, true)
            let category = data.category
            return { ...data, slug, text, category };
        });
        const result = {}
        categories.forEach(c => {
            var data = content.filter(s => s.category == c.id)
            if (data.length != 0)
                result[c.name] = data;
        });
        return result;
    } catch (e) {
        console.log(e)
        if (e.code == 'ENOENT') {
            return false;
        }
        return [];
    }
}

export function getCatgories() {
    let rawdata = fs.readFileSync(path.resolve(path.join(path.dirname(''), 'content/categories.json')), "utf-8");
    let data = JSON.parse(rawdata);
    return data.categories;
}

export function getPost(postType: string, slug: string) {
    const file = getContent(postType, slug);

    if (!file) {
        return {
            status: 404
        }
    }

    const renderer = new marked.Renderer();

    // @ts-ignore
    const { data, content } = grayMatter(file);
    const html = marked(content, { renderer });
    var excerpt = getExcerpt(content);
    return {
        ...data, slug, html, postType, excerpt
    }
}

const getContent = (postType, fileName) => {
    try {
        return fs.readFileSync(
            path.resolve(path.join(path.dirname(''), `content/${postType}/`), `${fileName}.md`),
            'utf-8'
        );
    } catch (e) {
        if (e.code == 'ENOENT') {
            return false;
        }
        return [];
    }
};


export async function loadFiles(postType: string, { fetch }) {
    const res = await fetch(`${postType}.json`);
    if (res.ok) {
        const data = await res.json()
        return {
            props: {
                posts: data
            }
        };
    }
    return {
        status: res.status,
        error: new Error(`${res.status} - There was an error while loading the manual.\n${res.statusText}`)
    };
}

export async function loadFile(postType: string, slug: string, { fetch }) {
    const url = `/${postType}/${slug}`;
    const res = await fetch(`${url}.json`);
    if (res.ok) {
        const data = await res.json()
        return {
            props: { post: data }
        };
    }
    return {
        status: res.status,
        error: new Error(`${res.status} - Could not load ${url}\n${await res.statusText}`)
    };
}

function htmlEscapeToText(text) {
    return text.replace(/\&\#[0-9]*;|&amp;/g, function (escapeCode) {
        if (escapeCode.match(/amp/)) {
            return '&';
        }
        return String.fromCharCode(escapeCode.match(/[0-9]+/));

    });

}
function getExcerpt(content, html = false) {
    var newline = html ? "<br/>" : "\r\n";
    const renderer = {
        link(href, title, text) { return text; },
        paragraph(text) { return htmlEscapeToText(text) + newline; },
        strong(text) { return text; },
        em(text) { return text; },
        image(href, title, text) { return ''; },
        heading(text, number, raw, slugger) { return raw + newline; }
    }
    marked.use({ renderer });
    var text = marked(content, renderer);
    text = text.substr(0, 250) + "\u2026";
    return text;
}