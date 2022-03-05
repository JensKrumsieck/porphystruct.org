<script>
	import website from '$lib/config/website';
	import defaultOgImage from '$lib/assets/open-graph.png';
	import defaultTwitterImage from '$lib/assets/open-graph.png';
	import Twitter from './Twitter.svelte';
	import OpenGraph from './OpenGraph.svelte';
	const {
		author,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		githubPage,
		twitterUsername
	} = website;

	const defaultAlt = siteTitle;
	let metaDescription =
		'PorphyStruct, a new digital tool for the analysis of non-planar distortion modes of different porphyrinoids.';
	export let title = '';
	export let slug = '';
	export let description = '';
	export let ogImage = {
		url: defaultOgImage,
		alt: defaultAlt
	};
	export let twitterImage = {
		url: defaultTwitterImage,
		alt: defaultAlt
	};
	const url = `${siteUrl}/${slug}`;
	const pageTitle = `${title ? title + ' - ' : ''}${siteTitle}`;
	description = description != '' ? description : metaDescription;
	const openGraphProps = {
		image: ogImage,
		description,
		ogLanguage,
		pageTitle,
		siteTitle,
		url
	};
	const twitterProps = {
		author,
		twitterUsername,
		image: twitterImage
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>

	<meta name="description" content={description} />
	<meta
		name="robots"
		content="index, follow"
	/>
	<html lang={siteLanguage} />
	<link rel="canonical" href={url} />
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
