<script lang="ts">;
	export let article = false;
	export let date: string;
	export let pageImage: string;
	export let pageDescription: string;
	export let ogLanguage: string;
	export let pageTitle: string;
	export let siteTitle: string;
	export let pageUrl: string;
</script>

<svelte:head>
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content={ogLanguage} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:type" content={article ? 'article' : 'website'} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	{#if pageImage}
		<meta property="og:image" content={pageImage} />
		<meta property="og:image:alt" content={siteTitle} />
	{/if}
	{#if article}
		<meta property="article:published_time" content={date} />
		<meta property="article:modified_time" content={date} />
	{/if}
</svelte:head>
