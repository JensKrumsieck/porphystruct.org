import { getPost } from '$lib/data/cms';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const { slug } = params;
    const post = getPost("manual", slug);
    if (!post) {
        return {
            status: 404
        }
    }
    return {
        body: post
    };
}