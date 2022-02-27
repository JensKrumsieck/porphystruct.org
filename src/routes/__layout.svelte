<script>
	import Button from '$lib/components/common/Button.svelte';
	import Windows from 'svelte-material-icons/Windows.svelte';
	import Top from 'svelte-material-icons/ArrowUpThick.svelte';
	import '@fontsource/source-sans-pro';
	import '../app.css';
	import GdprConsent from '$lib/components/GdprConsent.svelte';
	import Wrapper from '$lib/components/common/Wrapper.svelte';
	import H3 from '$lib/components/common/H3.svelte';
	import Badge from '$lib/components/common/Badge.svelte';
	import ContactJens from '$lib/components/ContactJens.svelte';
	import ContactMartin from '$lib/components/ContactMartin.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<GdprConsent />
<a
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

<footer class="mt-12">
	<section>
		<svg
			class="absolute right-0 z-[-1] md:flex hidden"
			xmlns="http://www.w3.org/2000/svg"
			width="1363.724"
			height="483.796"
			viewBox="0 0 1363.724 483.796"
		>
			<path
				d="M668,4105.938c15.531-4.751,509.621-313.558,509.621-313.558L930.576,4105.938l247.045-147.277-49.884,180.533,118.772-73.638h767.265"
				transform="translate(-650.051 -3754.22)"
				fill="none"
				stroke="#0088bc"
				stroke-width="90"
			/>
		</svg>
		<Wrapper notFullHeight>
			<div class="md:w-1/3 w-full">
				<H3>Interested? Download now! It's Free!</H3>
				<Button _class="w-72" href="https://github.com/jenskrumsieck/porphystruct/releases/latest">
					<Windows size="1.5rem" />
					<span> <span class="font-bold ml-2">Download </span> for Windows</span>
				</Button>

				<a href="https://app.porphystruct.org" class="block mt-5 hover:text-dark-blue">
					Try Webversion <Badge>Beta</Badge>
				</a>
			</div>
			<div class="logo-footer md:w-2/3 w-full md:mt-0 mt-10">
				<div class="flex md:place-content-end">
					<img src="ps_logo.svg" alt="Logo" width="42px" />
					<span class="font-bold text-[1.75rem] ml-2 self-center">PorphyStruct</span>
				</div>
				<p class="flex md:place-content-end mt-4">
					<a href="/imprint">Legal Notice</a>
					<a class="ml-6" href="/privacy">Privacy Policy</a>
				</p>
			</div>
			<div class="flex flex-wrap">
				<ContactJens />
				<ContactMartin />
			</div>
		</Wrapper>
	</section>
</footer>
