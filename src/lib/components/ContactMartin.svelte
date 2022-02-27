<script>
	// @ts-ignore
	import martin from '../../../static/icon.png?w=100;200;300;400;500;&format=webp&srcset';
	import ContactCard from '$lib/components/common/ContactCard.svelte';
	let img = `<img srcset=${martin} alt="Martin" loading="lazy" />`;
	let url = 'https://www.tu-braunschweig.de/iaac/personal/prof-dr-m-broering';
	let name = 'Prof. Dr. Martin Bröring';

	let orcid = '0000-0001-6807-6579';
</script>

<ContactCard {img} {url} {name} {orcid} />
