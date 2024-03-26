<script>
	 export let _class=""
</script>

<h1 class="md:text-3xl lg:text-4xl xl:text-5xl text-2xl mt-0 {_class}">
	<slot />
</h1>

<style>
	h1 {
		transition: all 0.5s ease-in-out;
	}
</style>
