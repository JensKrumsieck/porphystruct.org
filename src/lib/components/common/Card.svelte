<script>
	export let title = '';
	export let image;
	export let url = '';
</script>

<div class="lg:w-1/4 md:w-1/3 w-full bg-white rounded-lg shadow-lg align-center h-[390px]">
	<a sveltekit:prefetch class="hover:text-blue w-full" href={url}>
		{#if image != undefined}
			<img src={image} alt="Cover" {title} class="rounded-t-lg object-cover w-full h-1/2"/>
		{/if}
		<h3 class="font-bold py-2 px-6 text-2xl">
			{title}
		</h3>
	</a>
	<div class="px-6 pb-6 text-dark-blue text-sm">
		<slot />
	</div>
</div>
