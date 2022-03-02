import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import { marked } from 'marked';
import katex from 'katex'

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
            // @ts-ignore
            var data = content.filter(s => s.category == c.id).sort((a, b) => -(a.priority - b.priority) || a.slug.localeCompare(b.slug));
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
    renderer.image = (href: string, text: string, title: string) => {
        var alt = text != undefined && text != "" ? `alt="${text}"` : ""
        var titel = title != undefined && title != "" ? `title="${title}"` : ""
        return `<a href="${href}" target="_blank"><img class="content-image" src="${href}" ${alt} ${titel}/></a>`
    };
    renderer.table = (header: string, body: string) => {
        return `
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-md sm:rounded-lg">
                        <table class="min-w-full table-auto">
                            <thead class="bg-dark-blue text-white font-normal text-center">${header}</thead>
                            <tbody class="divide-y text-center">${body}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      `
    };

    const originalCode = renderer.code;
    const originalCodeSpan = renderer.codespan;
    renderer.code = (code: string, lang: string, escaped: boolean) => {
        if (lang == "math") return renderTex(code, true)
        return originalCode(code, lang, escaped);
    };

    renderer.codespan = (code: string) => {
        if (code.startsWith("math")) return renderTex(code.substring(4))
        return originalCodeSpan(code);
    }
    // @ts-ignore
    var { data, content } = grayMatter(file);
    var html = marked(content, { renderer });
    var excerpt = getExcerpt(content);
    var categoryName = getCategoryName(data.category);
    return {
        ...data, slug, html, postType, excerpt, categoryName
    }
}

function getCategoryName(id) {
    var categories = getCatgories();
    return categories.filter(s => s.id == id)[0].name;
}
function getContent(postType, fileName) {
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

function renderTex(content, block: boolean = false) {
    return katex.renderToString(content, { displayMode: block, output: 'mathml' });
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
    text = text.substr(0, 160) + "\u2026";
    return text;
}