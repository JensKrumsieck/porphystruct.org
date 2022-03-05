import website from "$lib/config/website";
import { getAllPosts } from "$lib/data/cms"

export async function get() {
    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml',
    }

    const pages = ["privacy", "imprint"]

    const docs = getAllPosts("docs");
    let allDocs = []
    for (var key in docs) allDocs = allDocs.concat(docs[key]);

    return {
        headers,
        body: `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${website.siteUrl}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
        </url>
        ${allDocs.map(item =>
            `
            <url>
                <loc>${website.siteUrl}/docs/${item.slug}</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
        `).join('')}
        ${pages.map(item =>
                `
            <url>
                <loc>${website.siteUrl}/${item}</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
            `).join('')}
        </urlset > `,
    }
}
