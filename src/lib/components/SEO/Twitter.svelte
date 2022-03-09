<script lang="ts">
	import type { Author } from '$lib/data/types';
	export let pageAuthor: Author;
	export let pageImage: string;
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	{#if pageImage}
		<meta name="twitter:image" content={pageImage} />
	{/if}
	{#if pageAuthor.twitter != ''}
		<meta name="twitter:creator" content={`@${pageAuthor.twitter}`} />
		<meta name="twitter:site" content={`@${pageAuthor.twitter}`} />
	{/if}
	<meta name="twitter:label1" content="Written by" />
	<meta name="twitter:data1" content={pageAuthor.name} />
</svelte:head>
