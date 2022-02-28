import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import { marked } from 'marked';

export function getAllPosts(postType: string) {

    try {
        const categories = getCatgories()
        const content = fs.readdirSync(`content/${postType}/`).map((fileName) => {
            const slug = fileName.slice(0, -3);
            const file = fs.readFileSync(
                path.resolve(`content/${postType}/`, fileName),
                'utf-8'
            );
            // @ts-ignore
            const { data, content } = grayMatter(file);
            const renderer = {
                link(href, title, text) { return text; },
                paragraph(text) { return htmlEscapeToText(text) + '\r\n'; },
                strong(text) { return text; },
                em(text) { return text; },
                image(href, title, text) { return ''; }
            }
            marked.use({ renderer });
            let text = marked(content, renderer);
            text = text.substr(0, 160) + "\u2026";
            let category = data.category
            return { ...data, slug, text, category };
        });
        const result = {}
        categories.forEach(c => {
            result[c.name] = content.filter(s => s.category == c.name)
        });
        console.log(result)
        return result;
    } catch (e) {
        if (e.code == 'ENOENT') {
            return false;
        }
        return [];
    }
}

export function getCatgories() {
    let rawdata = fs.readFileSync(path.resolve('content/categories.json'), "utf-8");
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
    return {
        ...data, slug, html, postType
    }
}

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
        error: new Error(`There was an error while loading the manual}`)
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
        error: new Error(`Could not load ${url}`)
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

const getContent = (postType, fileName) => {
    try {
        return fs.readFileSync(
            path.resolve(`content/${postType}/`, `${fileName}.md`),
            'utf-8'
        );
    } catch (e) {
        if (e.code == 'ENOENT') {
            return false;
        }
        return [];
    }
};