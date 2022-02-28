<script context="module">
	import { loadFile } from '$lib/data/cms';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, params, fetch }) {
		const { slug } = params;
		return await loadFile('manual', slug, { fetch });
	}
</script>

<script>
	import Container from '$lib/components/common/Container.svelte';
	import H1 from '$lib/components/common/H1.svelte';
	import H3 from '$lib/components/common/H3.svelte';
	import Wrapper from '$lib/components/common/Wrapper.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import Arrow from 'svelte-material-icons/ChevronRight.svelte';
	import './content.scss';
	export let post;
</script>

<SEO title={post.title} slug="manual/{post.slug}" />

<Container _class="py-12">
	<Wrapper notFullHeight>
		{#if post.title != undefined}
			<nav aria-label="Breadcrumb" class="flex mb-5">
				<ol class="inline-flex items-center space-x-1">
					<li class="inline-flex items-center">
						<a href="/" class="flex items-center font-semibold hover:text-blue">
							<img src="/ps_logo.svg" style="width: 16px; height: 16px;" alt="icon" class="mr-2" />
							PorphyStruct
						</a>
					</li>
					<li class="inline-flex items-center">
						<Arrow size="1.25rem" />
						<a href="/manual" class="hover:text-blue"> Manual </a>
					</li>
					<li class="inline-flex items-center" aria-current="page">
						<Arrow size="1.25rem" />
						{post.title}
					</li>
				</ol>
			</nav>

			<H1>{post.title}</H1>
			<article class="mt-6 w-full">
				<figure class="rounded-lg shadow-lg md:float-right md:w-1/3">
					{#if post.image !== undefined}
						<img src={post.image} alt="Cover" title={post} class="rounded-lg" />
					{/if}
				</figure>
				<div class="content">
					{@html post.html}
				</div>
			</article>
		{:else}
			<H1>404 - NOT FOUND!</H1>
			<H3>Nothing here!</H3>
		{/if}
	</Wrapper>
</Container>
