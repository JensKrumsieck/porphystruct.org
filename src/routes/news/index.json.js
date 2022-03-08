import { getAllNews } from '$lib/data/news';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
    const news = getAllNews();
    if (!news) {
        return {
            status: 404
        }
    }
    return {
        body: news
    };
}