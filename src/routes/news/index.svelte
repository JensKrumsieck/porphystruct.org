<script context="module" lang="ts">
	import { base } from '$app/paths';

	/**
	 * @type {import('@sveltejs/kit').Load}
     * TODO: Add Pagination later
	 */
	export async function load({ url, params, fetch }) {
		const res = await fetch(`${base}/news.json`);
		if (res.ok) {
			const data = await res.json();
			return {
				props: { news: data }
			};
		}
		return {
			status: res.status,
			error: new Error(`${res.status} - ${await res.statusText} - URL was ${url}`)
		};
	}
</script>

<script lang="ts">
	import '../content.scss';
	import Container from '$lib/components/common/Container.svelte';
	import H1 from '$lib/components/common/H1.svelte';
	import NewsCard from '$lib/components/news/NewsCard.svelte';
	export let news;
</script>

<Container>
	<H1 _class="mt-8">News</H1>
	<ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 grid-cols-1 mt-8">
		{#each news as theNews}
			<li>
				<NewsCard news={theNews} />
			</li>
		{/each}
	</ul>
</Container>
