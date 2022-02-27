import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import { marked } from 'marked';

function htmlEscapeToText(text) {
    return text.replace(/\&\#[0-9]*;|&amp;/g, function (escapeCode) {
        if (escapeCode.match(/amp/)) {
            return '&';
        }
        return String.fromCharCode(escapeCode.match(/[0-9]+/));

    });

}

const getAllPosts = (postType) => {
    try {
        return fs.readdirSync(`content/${postType}/`).map((fileName) => {
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
            return { ...data, slug, text };
        });
    } catch (e) {
        if (e.code == 'ENOENT') {
            return false;
        }
        return [];
    }
};

export async function get({ params }) {
    const { postType } = params;
    const allPosts = getAllPosts(postType);

    if (!allPosts) {
        return {
            status: 404
        }
    }

    return {
        body: allPosts
    };
}