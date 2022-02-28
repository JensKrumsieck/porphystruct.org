<script context="module">
	import { loadFiles } from '$lib/data/cms';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, fetch }) {
		return await loadFiles(url.pathname, { fetch });
	}
</script>

<script>
	import Card from '$lib/components/common/Card.svelte';
	import Container from '$lib/components/common/Container.svelte';
	import H1 from '$lib/components/common/H1.svelte';
	import H3 from '$lib/components/common/H3.svelte';
	import Wrapper from '$lib/components/common/Wrapper.svelte';
	import SEO from '$lib/components/SEO/index.svelte';

	export let posts;
	let postType = 'manual';
	let title = 'Manual';
</script>

<SEO {title} slug={postType} />
<Container _class="py-12">
	<Wrapper notFullHeight>
		<H1>{title}</H1>
		<div class="mt-8 flex gap-8">
			{#if posts.length != undefined && posts.length != 0}
				{#each posts as post}
					<Card title={post.title} image={post.image} url="{postType}/{post.slug}">
						{post.text}
					</Card>
				{/each}
			{:else}
				<H3>No {postType} entries were found.</H3>
			{/if}
		</div>
	</Wrapper>
</Container>
