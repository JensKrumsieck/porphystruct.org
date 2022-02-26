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
		telegramUsername,
		twitterUsername
	} = website;

	const defaultAlt = siteTitle;
	let metaDescription =
		'PorphyStruct, a new digital tool for the analysis of non-planar distortion modes of different porphyrinoids.';
	export let title = '';
	export let slug = '';
	export let ogImage = {
		url: defaultOgImage,
		alt: defaultAlt
	};
	export let twitterImage = {
		url: defaultTwitterImage,
		alt: defaultAlt
	};
	const url = `${siteUrl}/${slug}`;
	const pageTitle = `${siteTitle} ${title ? ' - ' + { title } : ''}`;

	const openGraphProps = {
		image: ogImage,
		metaDescription,
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

	<meta name="description" content={metaDescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang={siteLanguage} />
	<link rel="canonical" href={url} />
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
