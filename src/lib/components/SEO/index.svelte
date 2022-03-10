<script lang="ts">
	import website from '$lib/config/website';
	import defaultOgImage from '$lib/assets/open-graph.png';
	import type { Author } from '$lib/data/types';

	const {
		author,
		ogLanguage,
		siteLanguage,
		shortTitle,
		siteTitle,
		siteUrl,
		gitHubUsername,
		linkedInProfile,
		twitterUsername,
		keywords,
		description
	} = website;

	export let pageTitle = '';
	export let pageDescription = '';
	export let pageUrl = '';
	export let pageImage = '';
	export let pageAuthor: Author = {
		name: author,
		twitter: twitterUsername,
		gitHub: gitHubUsername,
		linkedIn: linkedInProfile,
		website: siteUrl
	};
	export let date = '';
	export let article = false;
	export let articleType = 'news';

	pageTitle = `${pageTitle != '' ? pageTitle + ' - ' : ''}${siteTitle}`;
	pageUrl = `${siteUrl}/${pageUrl}`;
	pageDescription = pageDescription != '' ? pageDescription : description;
	pageImage = pageImage != '' ? pageImage : defaultOgImage;

	import Twitter from './Twitter.svelte';
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';
	import DC from './DC.svelte';

	let twitterProps = {
		pageAuthor,
		pageImage
	};

	let openGraphProps = {
		article,
		pageTitle,
		siteTitle,
		pageUrl,
		date,
		pageDescription,
		pageImage,
		ogLanguage
	};

	let schemaOrgProps = {
		article,
		pageAuthor,
		shortTitle,
		siteTitle,
		pageDescription,
		pageTitle,
		siteLanguage,
		siteUrl,
		pageUrl,
		pageImage,
		date,
		articleType
	};

	let dcProps = {
		article,
		pageAuthor,
		pageDescription,
		pageTitle,
		date
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="title" content={pageTitle} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="robots" content="index, follow" />
	<meta name="author" content={pageAuthor.name} />
	<html lang={siteLanguage} />
	<link rel="canonical" href={pageUrl} />
</svelte:head>
<OpenGraph {...openGraphProps} />
<Twitter {...twitterProps} />
<SchemaOrg {...schemaOrgProps} />
<DC {...dcProps} />
