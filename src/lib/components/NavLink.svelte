<script>
	import { page } from '$app/stores';
	export let href = '';
	export let prefetch = false;
	let active = false;
	$: active = $page.url.href == href || $page.url.pathname.startsWith(href);
</script>

<li
	class="md:hover:text-blue hover:text-white hover:font-semibold md:hover:bg-transparent hover:bg-blue"
	class:active
>
	{#if prefetch}
		<a {href} sveltekit:prefetch class="flex p-4">
			<slot />
		</a>
	{:else}
		<a {href} class="flex p-4">
			<slot />
		</a>
	{/if}
</li>

<style>
	.active {
		font-weight: bold;
		border-top: .25rem solid #0092ca;
	}
</style>
