<script context="module" lang="ts">
	import { base } from '$app/paths';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, params, fetch }) {
		const res = await fetch(`${base}/news/${params.year}/${params.month}/${params.slug}.json`);
		if (res.ok) {
			const news = await res.json();
			return {
				props: { news: news }
			};
		}
		return {
			status: res.status,
			error: new Error(`${res.status} - ${await res.statusText} - URL was ${url}`)
		};
	}
</script>

<script lang="ts">
	import '../../../content.scss';
	import website from '$lib/config/website';
	import { generateToc } from '$lib/util/toc';
	import { afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	import SEO from '$lib/components/SEO/index.svelte';
	import H1 from '$lib/components/common/H1.svelte';
	import Container from '$lib/components/common/Container.svelte';
	import H3 from '$lib/components/common/H3.svelte';
	import Arrow from 'svelte-material-icons/ChevronRight.svelte';
	import { monthNames } from '$lib/data/cms';
	import { to_number } from 'svelte/internal';
	import AuthorInfo from '$lib/components/news/AuthorInfo.svelte';
	export let news;

	let image = {
		url: website.siteUrl + news.image,
		alt: news.title
	};
	let toc = true;
	afterUpdate(() => {
		toc = generateToc(document);
	});
</script>

{#if news.image == '' || news.image == undefined || news.image == 'undefined'}
	<SEO
		title={news.title}
		slug="news/{$page.params.year}/{$page.params.month}/{$page.params.slug}"
		description={news.excerpt}
		twitterHandle={news.author.twitter}
		postAuthor={news.author.name}
	/>
{:else}
	<SEO
		title={news.title}
		slug="news/{$page.params.year}/{$page.params.month}/{$page.params.slug}"
		description={news.excerpt}
		ogImage={image}
		twitterImage={image}
		twitterHandle={news.author.twitter}
		postAuthor={news.author.name}
	/>
{/if}
<Container>
	<div class="flex">
		<div class="flex-1 w-full pt-8 pb-5 relative">
			<nav aria-label="Breadcrumb" class="flex">
				<ol class="inline-flex items-center space-x-1 flex-wrap ">
					<li class="inline-flex items-center">
						<a href="/" class="flex items-center font-semibold hover:text-blue">
							<img src="/ps_logo.svg" style="width: 16px; height: 16px;" alt="icon" class="mr-2" />
							PorphyStruct
						</a>
					</li>
					<li class="inline-flex items-center">
						<Arrow size="1.25rem" />
						<a href="/news" class="flex items-center font-semibold hover:text-blue">News</a>
					</li>
					<li class="inline-flex items-center">
						<Arrow size="1.25rem" />
						{$page.params.year}
					</li>
					<li class="inline-flex items-center" aria-current="page">
						<Arrow size="1.25rem" />
						{monthNames[to_number($page.params.month) - 1]}
					</li>
				</ol>
			</nav>
			{#if news.title != undefined}
				<div class="mt-6">
					<H1>{news.title}</H1>
					<AuthorInfo {news} />
					<article class="mt-6 bg-white rounded-lg p-4">
						{#if news.image != undefined}
							<figure class="mb-8 text-center w-full">
								<img
									src={news.image}
									alt="Cover"
									title={news.title}
									class="object-cover object-top h-96 w-full rounded"
								/>
							</figure>
						{/if}
						{#if toc}
							<div
								class="text-md lg:shadow-lg lg:float-right lg:p-8 lg:max-w-[50%] xl:max-w-[25%] lg:ml-8 lg:bg-dark-blue lg:rounded-lg lg:text-white"
							>
								<div id="toc" />
							</div>
						{/if}
						<div
							class="content prose prose-lg prose-h3:text-3xl prose-h4:text-xl max-w-none prose-headings:font-bold"
						>
							{@html news.html}
						</div>
					</article>
				</div>
			{:else}
				<H1>404 - NOT FOUND!</H1>
				<H3>Nothing here!</H3>
			{/if}
		</div>
	</div>
</Container>
