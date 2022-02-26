<script>
    /**
     * https://github.com/rodneylab/sveltekit-blog-mdx/blob/main/src/lib/components/SEO/Twitter.svelte
     */
	export let author;
	export let twitterUsername;
	export let image;
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	{#if image}
		<meta name="twitter:image" content={image.url} />
	{/if}
	{#if twitterUsername}
		<meta name="twitter:creator" content={`@${twitterUsername}`} />
		<meta name="twitter:site" content={`@${twitterUsername}`} />
	{/if}
	<meta name="twitter:label1" content="Written by" />
	<meta name="twitter:data1" content={author} />
	
</svelte:head>
