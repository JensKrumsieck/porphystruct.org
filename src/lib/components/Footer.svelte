<script>
	import Button from '$lib/components/common/Button.svelte';
	import Windows from 'svelte-material-icons/Windows.svelte';
	import Wrapper from '$lib/components/common/Wrapper.svelte';
	import H3 from '$lib/components/common/H3.svelte';
	import Badge from '$lib/components/common/Badge.svelte';
	import ContactJens from '$lib/components/ContactJens.svelte';
	import ContactMartin from '$lib/components/ContactMartin.svelte';
	import Container from './common/Container.svelte';
</script>

<footer class="mt-12">
	<Container>	
		<div class="flex flex-wrap rounded">
			<ContactJens />
			<ContactMartin />
		</div>
		<Wrapper notFullHeight>
			<div class="md:w-2/3 w-full">
				<H3>Interested? Download now! It's Free!</H3>
				<div class="group flex flex-wrap items-center w-full">
					<Button
						_class="w-72"
						href="https://github.com/jenskrumsieck/porphystruct/releases/latest"
					>
						<Windows size="1.5rem" />
						<span> <span class="font-bold ml-2">Download </span> for Windows</span>
					</Button>

					<Button _class="w-48 my-3 mx-3" href="https://app.porphystruct.org" outlined>
						<span class="font-bold">Webversion</span>
					</Button>
				</div>
			</div>	
			<div class="logo-footer md:w-1/3 w-full md:mt-0 mt-10">
				<div class="flex md:place-content-end">
					<img src="/ps_logo.svg" alt="Logo" width="42px" />
					<span class="font-bold text-[2rem] ml-2 self-center">PorphyStruct</span>
				</div>
				<p class="flex md:place-content-end mt-4">
					<a href="/imprint">Legal Notice</a>
					<a class="ml-6" href="/privacy">Privacy Policy</a>
				</p>
			</div>	
		</Wrapper>
	</Container>
</footer>
