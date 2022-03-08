import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import { renderExcerpt, renderMarkdown } from './marked';
import { getAllContent, getCategoryName, getCatgories, getContent } from './cms';

export function getAllPosts(postType: string): { [categoryID: string]: [] } {
    try {
        const categories = getCatgories()
        const content = getAllContent("docs").map((fileName) => {
            const slug = fileName.slice(0, -3);
            const file = getContent("docs", slug);
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

