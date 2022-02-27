<script>
    import * as icons from 'simple-icons'
	export let slug = 'SimpleIcons';
    export let size = "1rem";
    let icon = icons[slug.toLowerCase()]
</script>

{#if icon !== undefined}
	<figure style="width:{size}; height:{size};">{@html icon.svg}</figure>
{/if}
