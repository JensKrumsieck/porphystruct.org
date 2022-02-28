<script>
	export let href = '';
	export let active = false;
	export let prefetch = false;
</script>

<li class="md:hover:text-blue hover:text-white hover:font-semibold md:hover:bg-transparent hover:bg-blue" class:active>
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
		border-top: 4em solid #0092ca;
	}
</style>
