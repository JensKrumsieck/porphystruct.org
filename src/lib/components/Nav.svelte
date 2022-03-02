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

<nav class="container mx-auto justify-between px-4 flex flex-wrap md:bg-transparent bg-off-white">
	<div class="logo py-3">
		<a class="flex" href="/">
			<img src="/ps_logo.svg" alt="Logo" width="42px" />
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
		class="font-normal text-lg md:flex md:w-auto w-full md:order-1  justify-between items-center"
		id="main-menu"
	>
		<ul class="flex md:flex-row flex-col navbar">
			<NavLink prefetch href="/docs">Docs</NavLink>
			<NavLink href="https://github.com/jenskrumsieck/porphystruct/issues">Report Bug</NavLink>
		</ul>
	</div>
</nav>
