<script lang="ts">
	import type { Author } from '$lib/data/types';

	export let article = false;
	export let pageAuthor: Author;
	export let shortTitle: string;
	export let siteTitle: string;
	export let pageDescription: string;
	export let pageTitle: string;
	export let siteLanguage: string;
	export let siteUrl: string;
	export let pageUrl: string;
	export let pageImage: string;
	export let date: string;
	export let articleType: string;

	const schemaOrgEntity = {
		'@type': ['Person', 'Organization'],
		'@id': `${siteUrl}/#/schema/person/${pageAuthor.name}`,
		name: pageAuthor,
		sameAs: [
			`https://twitter.com/${pageAuthor.twitter}`,
			`https://github.com/${pageAuthor.gitHub}`,
			`https://linkedin.com/in/${pageAuthor.linkedIn}`
		]
	};
	const schemaOrgWebsite = {
		'@type': 'WebSite',
		'@id': `${siteUrl}/#website`,
		url: siteUrl,
		name: siteTitle,
		description: shortTitle,
		publisher: {
			'@id': `${siteUrl}/#/schema/person/${pageAuthor.name}`
		},
		inLanguage: siteLanguage
	};

	const schemaOrgImageObject = {
		'@type': 'ImageObject',
		'@id': `${pageUrl}#primaryimage`,
		inLanguage: siteLanguage,
		url: pageImage,
		contentUrl: pageImage,
		caption: pageTitle
	};

	const schemaOrgWebPage = {
		'@type': 'WebPage',
		'@id': `${pageUrl}#webpage`,
		pageUrl,
		name: pageTitle,
		isPartOf: {
			'@id': `${siteUrl}/#website`
		},
		primaryImageOfPage: {
			'@id': `${pageUrl}#primaryimage`
		},
		datePublished: date,
		dateModified: date,
		author: {
			'@id': `${siteUrl}/#/schema/person/${pageAuthor.name}`
		},
		description: pageDescription,
		inLanguage: siteLanguage,
		potentialAction: [
			{
				'@type': 'ReadAction',
				target: [pageUrl]
			}
		]
	};

	let schemaOrgArticle = null;
	if (article) {
		schemaOrgArticle = {
			'@type': 'Article',
			'@id': `${pageUrl}#article`,
			isPartOf: {
				'@id': `${pageUrl}#webpage`
			},
			author: {
				'@id': `${siteUrl}/#/schema/person/${pageAuthor.name}`
			},
			headline: pageTitle,
			datePublished: date,
			dateModified: date,
			mainEntityOfPage: {
				'@id': `${pageUrl}#webpage`
			},
			publisher: {
				'@id': `${siteUrl}/#/schema/person/${pageAuthor.name}`
			},
			image: {
				'@id': `${pageUrl}#primaryimage`
			},
			articleSection: [articleType],
			inLanguage: siteLanguage
		};
	}

	const schemaOrgPublisher = {
		'@type': ['Person', 'Organization'],
		'@id': `${siteUrl}/#/schema/person/${pageAuthor.name}`,
		name: pageAuthor.name,
		image: {
			'@type': 'ImageObject',
			'@id': `${siteUrl}/#personlogo`,
			inLanguage: siteLanguage,
			url: `${siteUrl}/icon-512.png`,
			contentUrl: `${siteUrl}/icon-512.png`,
			width: 512,
			height: 512,
			caption: pageAuthor.name
		},
		logo: {
			'@id': `${siteUrl}/#personlogo`
		},
		sameAs: [
			pageAuthor.twitter != '' ? `https://twitter.com/${pageAuthor.twitter}` : '',
			pageAuthor.gitHub != '' ? `https://github.com/${pageAuthor.gitHub}` : '',
			pageAuthor.linkedIn != '' ? `https://linkedin.com/in/${pageAuthor.linkedIn}` : ''
		]
	};

	const schemaOrgArray = [
		schemaOrgEntity,
		schemaOrgWebsite,
		schemaOrgImageObject,
		schemaOrgWebPage,
		...(article ? [schemaOrgArticle] : []),
		schemaOrgPublisher
	];
	const schemaOrgObject = {
		'@context': 'https://schema.org',
		'@graph': schemaOrgArray
	};
	let jsonLdString = JSON.stringify(schemaOrgObject);
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
