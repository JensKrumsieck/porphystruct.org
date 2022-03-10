<script type="ts">
	import type { Author } from '$lib/data/types';
	import moment from 'moment';

	export let pageAuthor: Author;
	export let article: boolean;
	export let date: string;
	export let pageTitle: string;
	export let pageDescription: string;
</script>

<svelte:head>
	<meta name="DC.creator" content={pageAuthor.name} />
	<meta name="DC.title" content={pageTitle} />
	<meta name="DC.description" content={pageDescription} />
	<meta name="DC.date" content={moment(date).format('YYYY-MM-DD')} />
	{#if article}
		<meta name="type" content="article" />
	{:else}
		<meta name="type" content="website" />
	{/if}
</svelte:head>
