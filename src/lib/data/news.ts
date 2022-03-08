import { getAllContent, getAuthor, getContent, getTagName } from "./cms";
import grayMatter from 'gray-matter';
import { renderExcerpt, renderMarkdown } from "./marked";

export function getNews(year: string, month: string, slug: string) {
    const file = getContent("news", `${year}-${month}-${slug}`);
    if (!file) {
        return {
            status: 404
        }
    }
    return getData(file);
}

export function getAllNews(year: string = "", month: string = "") {
    try {
        let news = getAllContent("news");
        if (year != "") {
            news = news.filter(s => s.startsWith(year))
            if (month != "")
                news = news.filter(s => s.startsWith(`${year}-${month}`))
        }
        let content = news.map((fileName) => {
            const file = getContent("news", fileName.split(".")[0]);
            // @ts-ignore
            var data = getData(file);
            var slug = fileName.split(".")[0].split("-").slice(2).join("-");
            return {...data, slug}
        });

        return content;
    }
    catch (e) {
        console.log(e)
        if (e.code == 'ENOENT') {
            return {};
        }
        return {};
    }
}

function getData(file) {
    // @ts-ignore
    var { data, content } = grayMatter(file);
    var html = renderMarkdown(content)
    var excerpt = renderExcerpt(content)
    var author = getAuthor(data.author)
    var tags = data.tags.map(s => getTagName(s));
    return {
        ...data, html, excerpt, author, tags
    }
}