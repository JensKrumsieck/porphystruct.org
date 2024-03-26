<script>
	import Button from '$lib/components/common/Button.svelte';
	import Windows from 'svelte-material-icons/Windows.svelte';
	import NavLink from './NavLink.svelte';
	import OpenClose from '$lib/components/common/OpenClose.svelte';

	import { page } from '$app/stores';
	let open = false;
	$: {
		open = false;
		let url = $page;
	}
</script>

<nav class="container mx-auto px-4 flex flex-wrap md:bg-transparent bg-white">
	<div class="logo py-3 flex-auto">
		<a class="flex" href="/">
			<img src="/ps_logo.svg" alt="Logo" width="42px" />
			<span class="md:flex hidden font-bold text-4xl ml-3 self-center">PorphyStruct</span>
		</a>
	</div>
	<div class="flex md:order-2">
		<Button
			href="https://github.com/jenskrumsieck/porphystruct/releases/latest"
			_class="self-center"
		>
			<Windows size="1.5rem" />
			<span class="ml-2">Download</span>
		</Button>
		<Button _class="my-3 ml-2" href="https://app.porphystruct.org" outlined>
			<span class="font-bold">Webversion</span>
		</Button>
		<button
			data-collapse-toggle="main-menu"
			type="button"
			class="inline-flex items-center p-2 text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2"
			aria-controls="main-menu"
			aria-expanded="false"
			on:click={() => (open = !open)}
		>
			<span class="sr-only">Open main menu</span>
			<OpenClose {open} />
		</button>
	</div>
	<div
		class:hidden={!open}
		class="font-normal text-xl md:flex md:w-auto w-full md:order-1 justify-between items-center mr-2"
		id="main-menu"
	>
		<ul class="flex md:flex-row flex-col navbar">
			<NavLink prefetch href="/news">News</NavLink>
			<NavLink prefetch href="/docs">Docs</NavLink>
			<NavLink href="https://github.com/jenskrumsieck/porphystruct/issues">Report Bug</NavLink>
		</ul>
	</div>
</nav>
