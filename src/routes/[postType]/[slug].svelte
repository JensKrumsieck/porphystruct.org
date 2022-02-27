<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch }) {
		const { postType, slug } = params;
		const url = `/${postType}/${slug}`;
		const res = await fetch(`${url}.json`);
		if (res.ok) {
			return {
				props: { post: await res.json() }
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import H1 from '$lib/components/common/H1.svelte';
	import Wrapper from '$lib/components/common/Wrapper.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import { onMount } from 'svelte';
	import Arrow from 'svelte-material-icons/ChevronRight.svelte';
	import './content.scss';
	// @ts-ignore
	export let post;
	let cover;
	onMount(async () => {
		cover = await import(
			`../../../static/${post.image}?w=50;100;200;300;400;500;600;700;800;1000;1200;1500;1600;1800&format=webp&srcset`
		);
		console.log(cover);
	});
</script>

<SEO title={post.title} slug={post.slug} />

<section class="bg-off-white py-12">
	<Wrapper notFullHeight>
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
					<a href={'/' + post.postType} class="hover:text-blue">
						{post.postType.charAt(0).toUpperCase() + post.postType.slice(1)}
					</a>
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
				{#if cover !== undefined}
					<img srcset={cover.default} alt="Cover" title={post} class="rounded-lg"/>
				{/if}
			</figure>
			<div class="content">
				{@html post.html}
			</div>
		</article>
	</Wrapper>
</section>
