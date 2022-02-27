<script>
	import { onMount } from 'svelte';
	export let title = '';
	export let image = '';
	export let url = '';

	let cover;
	onMount(async () => {
		cover = await import(
			`../../../../static${image.split('.')[0]}.${
				image.split('.')[1]
			}?w=50;100;200;300;400;500;600;700;800;1000;1200;1500;1600;1800&format=webp&srcset`
		);
	});
</script>

<div
	class="xl:w-1/6 lg:w-1/4 md:w-1/3 w-1/2 bg-white rounded-lg shadow-lg align-center"
>
	<a sveltekit:prefetch class="hover:text-blue" href={url}>
		{#if cover !== undefined}
			<img srcset={cover.default} alt="Cover" {title} class="rounded-t-lg object-cover h-1/2 w-full"/>
		{/if}
		<p class="font-bold py-2 px-6 text-md">
			{title}
		</p>
	</a>
	<div class="px-6 pb-16 text-dark-blue text-sm">
		<slot />
	</div>
</div>
