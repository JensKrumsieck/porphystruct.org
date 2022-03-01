import { getAllPosts, getPost } from '$lib/data/cms';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const { slug } = params;
    const post = getPost("docs", slug);
    const posts = getAllPosts("docs")
    if (!post || !posts) {
        return {
            status: 404
        }
    }
    return {
        body: {
            post: post, posts: posts
        }
    };
}