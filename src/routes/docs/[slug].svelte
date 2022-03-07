<script context="module" lang="ts">
	import { base } from '$app/paths';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, params, fetch }) {
		const res = await fetch(`${base}/docs/${params.slug}.json`);
		if (res.ok) {
			const data = await res.json();
			return {
				props: { post: data.post, posts: data.posts }
			};
		}
		return {
			status: res.status,
			error: new Error(`${res.status} - ${await res.statusText} - URL was ${url}`)
		};
	}
</script>

<script lang="ts">
	import './content.scss';
	import Container from '$lib/components/common/Container.svelte';
	import H1 from '$lib/components/common/H1.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import Arrow from 'svelte-material-icons/ChevronRight.svelte';
	import H3 from '$lib/components/common/H3.svelte';
	import OpenClose from '$lib/components/common/OpenClose.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { afterUpdate } from 'svelte/internal';
	import { generateToc } from '$lib/util/toc';
	import { expandCode } from '$lib/util/expandCode';
	import website from '$lib/config/website';

	export let post;
	export let posts;
	let image = {
		url: website.siteUrl + post.image,
		alt: post.title
	};

	let open = false;
	let top = 0;

	let sb: HTMLElement, bc: HTMLElement, navHeight: number;
	onMount(() => {
		sb = document.getElementById('sb');
		bc = document.getElementById('bc');
		navHeight = document.getElementsByTagName('header')[0].getBoundingClientRect().height;
		scrollFixed();
	});
	afterUpdate(() => {
		generateToc(document);
		expandCode(document);
	});

	$: {
		open = false;
		let site = $page;
	}

	function scrollFixed() {
		if (sb == undefined || bc == undefined) return;
		if (window.innerWidth > 768) {
			sb.style.removeProperty('top');
			if (window.scrollY > navHeight && sb.style.height != window.innerHeight + 'px')
				sb.style.height = window.innerHeight + 'px';
			else if (
				window.scrollY < navHeight &&
				sb.style.height != window.innerHeight - navHeight + 'px'
			)
				sb.style.height = window.innerHeight - navHeight + 'px';
			top = 0;
			return;
		}
		var offset = bc.getBoundingClientRect();
		var value = offset.top + offset.height;
		if (value != top) {
			top = value;
			sb.style.top = top + 'px';
			sb.style.height = window.innerHeight - top + 'px';
		}
	}
</script>

<svelte:window on:scroll={scrollFixed} on:resize={scrollFixed} />
{#if post.image == '' || post.image == undefined || post.image == "undefined"}
	<SEO title={post.title} slug="docs/{$page.params.slug}" description={post.excerpt} />
{:else}
	<SEO
		title={post.title}
		slug="docs/{$page.params.slug}"
		description={post.excerpt}
		ogImage={image}
		twitterImage={image}
	/>
{/if}

<Container>
	<div class="flex">
		<!--sidebar-->
		<div
			class="sidebar z-30 md:static fixed md:sticky left-0 md:top-0 bg-off-white overflow-x-hidden overflow-y-auto self-start md:h-screen h-full md:pl-0 pl-4 pb-8"
			id="sb"
		>
			<div class="md:block w-64 pt-6" class:hidden={!open}>
				<nav>
					<ul>
						{#each Object.keys(posts) as cat}
							<li>
								<h5 class="py-2 font-bold text-lg text-dark">{cat}</h5>
								<ul>
									{#each posts[cat] as post}
										<li>
											<a
												class:active={post.slug == $page.params.slug}
												class="text-md text-dark-blue hover:bg-blue hover:text-white rounded p-2 w-full block"
												href={'/docs/' + post.slug}>{post.title}</a
											>
										</li>
									{/each}
								</ul>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		</div>
		<!--content-->
		<div class="flex-1 md:px-12 w-full pt-8 pb-5">
			<div class="z-30 flex mb-5 md:static sticky top-0 bg-off-white md:py-0 py-4" id="bc">
				<button
					type="button"
					class="md:hidden mr-2"
					aria-controls="side-menu"
					aria-expanded="false"
					on:click={() => (open = !open)}
				>
					<OpenClose {open} />
				</button>
				<nav aria-label="Breadcrumb" class="flex">
					<ol class="inline-flex items-center space-x-1 flex-wrap ">
						<li class="inline-flex items-center">
							<a href="/" class="flex items-center font-semibold hover:text-blue">
								<img
									src="/ps_logo.svg"
									style="width: 16px; height: 16px;"
									alt="icon"
									class="mr-2"
								/>
								PorphyStruct
							</a>
						</li>
						<li class="inline-flex items-center">
							<Arrow size="1.25rem" />
							{post.categoryName}
						</li>
						<li class="inline-flex items-center" aria-current="page">
							<Arrow size="1.25rem" />
							{post.title}
						</li>
					</ol>
				</nav>
			</div>
			{#if post.title != undefined}
				<H1 _class="mb-6">{post.title}</H1>
				<div
					class="text-md lg:shadow-lg lg:float-right lg:p-8 lg:max-w-[50%] xl:max-w-[25%] lg:ml-8 lg:bg-dark-blue lg:rounded-lg lg:text-white"
				>
					{#if post.image != undefined}
						<figure class="rounded-lg mb-8">
							<img src={post.image} alt="Cover" title={post.title} class="rounded-lg" />
						</figure>
					{/if}
					<div id="toc" class="" />
				</div>
				<article class="mt-6">
					<div class="content">
						{@html post.html}
					</div>
				</article>
			{:else}
				<H1>404 - NOT FOUND!</H1>
				<H3>Nothing here!</H3>
			{/if}
		</div>
	</div>
</Container>

<style lang="scss">
	.active {
		color: theme('colors.white');
		background: theme('colors.dark');
	}
</style>
