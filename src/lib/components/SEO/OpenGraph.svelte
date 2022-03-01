<script>
	/**
	 * https://github.com/rodneylab/sveltekit-blog-mdx/blob/main/src/lib/components/SEO/OpenGraph.svelte
	 */
	export let article = false;
	export let image;
	export let description;
	export let ogLanguage;
	export let pageTitle;
	export let siteTitle;
	export let url;
</script>

<svelte:head>
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content={ogLanguage} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content={article ? 'article' : 'website'} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	{#if image}
		<meta property="og:image" content={image.url} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="640" />
		<meta property="og:image:alt" content={image.alt} />
	{/if}
</svelte:head>
