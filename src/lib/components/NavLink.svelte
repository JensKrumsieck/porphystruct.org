<script>
	export let href = '';
	export let active = false;
</script>

<li class="md:hover:text-blue hover:text-white hover:font-semibold md:hover:bg-off-white hover:bg-blue" class:active>
	<a {href} class="flex p-4">
		<slot />
	</a>
</li>

<style>
	.active {
		font-weight: bold;
		border-top: 4em solid #0092ca;
	}
</style>
