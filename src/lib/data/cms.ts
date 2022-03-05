import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import { renderExcerpt, renderMarkdown } from './marked';

export function getAllPosts(postType: string): { [categoryID: string]: [] } {
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
            let category = data.category
            return { ...data, slug, category };
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
            return {};
        }
        return {};
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

    // @ts-ignore
    var { data, content } = grayMatter(file);
    var html = renderMarkdown(content)
    var excerpt = renderExcerpt(content)
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