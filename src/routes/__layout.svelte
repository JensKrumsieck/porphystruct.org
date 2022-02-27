<script>
	import Button from '../lib/components/Button.svelte';
	import Windows from 'svelte-material-icons/Windows.svelte';
	import '@fontsource/source-sans-pro';
	import '../app.css';
	import GdprConsent from '$lib/components/GdprConsent.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import H3 from '$lib/components/H3.svelte';
	import Badge from '$lib/components/Badge.svelte';
	let open = false;
</script>

<GdprConsent />
<header class="bg-off-white z-50 relative">
	<nav class="container mx-auto justify-between px-4 flex flex-wrap ">
		<div class="logo py-3">
			<a class="flex" href="/">
				<img src="ps_logo.svg" alt="Logo" width="42px" />
				<span class="md:flex hidden font-bold text-[1.75rem] ml-2 self-center">PorphyStruct</span>
			</a>
		</div>
		<div class="flex md:order-2 ">
			<Button
				href="https://github.com/jenskrumsieck/porphystruct/releases/latest"
				_class="self-center"
			>
				<Windows size="1.5rem" />
				<span>Download</span>
			</Button>
			<button
				data-collapse-toggle="main-menu"
				type="button"
				class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="main-menu"
				aria-expanded="false"
				on:click={() => (open = !open)}
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class:hidden={open}
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/></svg
				>
				<svg
					class:hidden={!open}
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		</div>
		<div
			class:hidden={!open}
			class="font-normal text-lg md:flex md:w-auto w-full md:order-1  justify-between items-center"
			id="main-menu"
		>
			<ul class="flex md:flex-row flex-col">
				<li class="p-4">Docs</li>
				<li class="p-4">Docs</li>
			</ul>
		</div>
	</nav>
</header>

<main>
	<slot />
</main>

<footer class="mt-12">
	<section>
		<svg
			class="absolute right-0"
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
			</div>
		</Wrapper>
	</section>
</footer>
