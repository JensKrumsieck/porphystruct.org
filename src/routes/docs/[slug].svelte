<script context="module" lang="ts">
	import { loadFile } from '$lib/data/cms';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, params, fetch }) {
		const { slug } = params;
		return await loadFile('docs', slug, { fetch });
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
	export let post;
	let open = false;
	let top = 0;

	onMount(() => {
		scrollFixed();
	});
	afterUpdate(() => {
		generateToc(document);
		expandCode(document);
	});

	$: {
		open = false;
		let url = $page;
	}

	function scrollFixed() {
		var sb = document.getElementById('sb');
		if (window.innerWidth > 768) {
			sb.style.removeProperty('top');
			return;
		}
		var offset = document.getElementById('bc').getBoundingClientRect();
		var value = offset.top + offset.height;
		if (value != top) {
			top = value;
			sb.style.top = top + 'px';
		}
	}
</script>

<svelte:window on:scroll={scrollFixed} />
<SEO title={post.post.title} slug="docs/{post.post.slug}" description={post.post.excerpt} />
<Container>
	<div class="flex">
		<!--sidebar-->
		<div
			class="md:static fixed md:sticky left-0 md:top-0 bg-off-white overflow-visible self-start md:h-auto h-full md:pl-0 pl-4"
			id="sb"
		>
			<div class="md:block w-64 pt-6" class:hidden={!open}>
				<nav>
					<ul>
						{#each Object.keys(post.posts) as cat}
							<li>
								<h5 class="py-2 font-bold text-lg text-dark">{cat}</h5>
								<ul>
									{#each post.posts[cat] as post}
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
			<div class="flex mb-5 md:static sticky top-0 bg-off-white md:py-0 py-4" id="bc">
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
							{post.post.categoryName}
						</li>
						<li class="inline-flex items-center" aria-current="page">
							<Arrow size="1.25rem" />
							{post.post.title}
						</li>
					</ol>
				</nav>
			</div>
			{#if post.post.title != undefined}
				<H1 _class="mb-6">{post.post.title}</H1>
				<div
					class="text-md lg:shadow-lg lg:float-right lg:p-8 lg:max-w-[50%] xl:max-w-[25%] lg:ml-8 lg:bg-dark-blue lg:rounded-lg lg:text-white"
				>
					{#if post.post.image != undefined}
						<figure class="rounded-lg mb-8">
							<img src={post.post.image} alt="Cover" title={post.post.title} class="rounded-lg" />
						</figure>
					{/if}
					<div id="toc" class="" />
				</div>
				<article class="mt-6">
					<div class="content">
						{@html post.post.html}
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
