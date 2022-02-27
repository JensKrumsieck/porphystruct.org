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
	class="md:w-1/6 w-1/3 bg-white border border-gray-100 rounded-lg text-center hover:shadow-lg align-center"
>
	<a sveltekit:prefetch class="hover:text-blue" href={url}>
		{#if cover !== undefined}
			<img srcset={cover.default} alt="Cover" {title} class="rounded-lg" />
		{/if}
		<p class="font-bold pt-3 pb-2 text-md">
			{title}
		</p>
	</a>
	<slot />
</div>
