import { getAllPosts } from "$lib/data/cms";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const allPosts = getAllPosts("docs");
    if (!allPosts) {
        return {
            status: 404
        }
    }
    return {
        body: allPosts
    };
}