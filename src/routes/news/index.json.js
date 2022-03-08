import { getAllNews } from '$lib/data/news';
import { to_number } from 'svelte/internal';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event) {
    let limit = 0;
    if (event.url.searchParams.has('limit')) limit = to_number(event.url.searchParams.get('limit'));
    const news = getAllNews("", "", 0, limit);
    if (!news) {
        return {
            status: 404
        }
    }
    return {
        body: news
    };
}