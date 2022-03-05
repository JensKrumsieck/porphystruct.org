import { getAllPosts } from "$lib/data/cms";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({params}) {
    const posts = getAllPosts("docs")
    if(!posts){
        return{
            status: 404,
            // @ts-ignore
            statusText: "Error: posts not populated"
        }
    }
    return {
        body: {
            posts: posts
        }
    };
}