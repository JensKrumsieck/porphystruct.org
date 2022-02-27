<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params, fetch }) {
		const { postType } = params;
		const res = await fetch(`/${postType}.json`);
		if (res.ok) {
			return {
				props: {
					posts: await res.json(),
					postType
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`There was an error while loading the ${postType}`)
		};
	}
</script>

<script>
	import Card from '$lib/components/common/Card.svelte';
	import H1 from '$lib/components/common/H1.svelte';
	import Wrapper from '$lib/components/common/Wrapper.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	export let posts;
	export let postType;
	// @ts-ignore
	let title = postType.charAt(0).toUpperCase() + postType.slice(1);
</script>

<SEO {title} slug={postType} />
<section class="bg-off-white py-12">
	<Wrapper notFullHeight>
		<H1>{title}</H1>
		<div class="mt-8 flex gap-8">
			{#if posts.length != 0}
				{#each posts as post}
					<Card title={post.title} image={post.image} url="{postType}/{post.slug}">
						{post.text}
					</Card>
				{/each}
			{:else}
				<p>No {postType} entries were found.</p>
			{/if}
		</div>
	</Wrapper>
</section>
