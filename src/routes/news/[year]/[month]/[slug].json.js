import { getNews } from '$lib/data/news';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const { year, month, slug } = params;
    const post = getNews(year, month, slug);
    if (!post) {
        return {
            status: 404
        }
    }
    return {
        body: post
    };
}