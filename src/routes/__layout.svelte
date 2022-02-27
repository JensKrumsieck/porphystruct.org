<script>
	import Top from 'svelte-material-icons/ArrowUpThick.svelte';
	import '@fontsource/source-sans-pro';
	import '../app.css';
	import GdprConsent from '$lib/components/GdprConsent.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<GdprConsent />
<a
	role="button"
	title="Scroll to the top of the page"
	href="#top"
	class="z-[9998] rounded-full flex flex-col fixed bg-blue p-2 shadow-xl bottom-2 right-12 max-w-lg text-white"
>
	<Top size="1.25rem" />
</a>
<header class="bg-off-white z-50 relative" id="top">
	<Nav />
</header>

<main>
	<slot />
</main>
<Footer />
