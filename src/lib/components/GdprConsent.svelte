<script context="module" lang="ts">
	export interface GdprSettings {
		show: boolean;
		analytics: boolean;
		youtube: boolean;
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	import { gdprSettings } from '../../store.js';
	import H3 from '$lib/components/common/H3.svelte';
	import Cookie from 'svelte-material-icons/Cookie.svelte';

	let pageLoaded = false;
	onMount(() => (pageLoaded = true));

	let currentSettings: GdprSettings = $gdprSettings;
	let analyticsCheck = $gdprSettings.analytics;
	let showSettings: boolean = false;
	let youtubeCheck = $gdprSettings.youtube;
	let ga;

	$: if ($gdprSettings) {
		currentSettings = $gdprSettings;
	}
	const acceptCookies = () => {
		let newSettings: GdprSettings = {
			show: false,
			analytics: true,
			youtube: true
		};
		gdprSettings.set(newSettings);
		// Init analytics
		if (newSettings.analytics) {
			ga.init();
		}
		console.log('Cookies accepted');
	};
	const saveAndExit = () => {
		let newSettings: GdprSettings = {
			show: false,
			analytics: analyticsCheck,
			youtube: youtubeCheck
		};
		gdprSettings.set(newSettings);
		// Init analytics
		if (newSettings.analytics) {
			ga.init();
		}
		console.log('Save and Exit');
	};

	const declineAll = () => {
		let newSettings: GdprSettings = {
			show: false,
			analytics: false,
			youtube: false
		};
		gdprSettings.set(newSettings);
	};

	let openGa = false;
	let openYT = false;
</script>

<GoogleAnalytics
	bind:this={ga}
	properties={['G-GK2FHC96JT']}
	enabled={currentSettings.analytics}
	configurations={{
		'G-GK2FHC96JT': {
			anonymize_ip: true,
			client_storage: 'none',
			cookie_expires: 0
		}
	}}
/>
{#if pageLoaded && currentSettings.show}
	<div
		class="z-[9999] fixed bg-dark rounded pt-2 pb-4 shadow-xl bottom-0 right-0 w-full text-white consent"
	>
		<div class="container mx-auto px-4">
			<div class="flex">
				<div class="mt-2 mr-2">
					<Cookie size="3rem" />
				</div>
				<H3>Cookie Consent</H3>
			</div>
			{#if showSettings}
				<div class="form-control">
					<label class="cursor-pointer label">
						<span class="label-text text-lg mr-2">Google Analytics</span>
						<input type="checkbox" class="toggle" bind:checked={analyticsCheck} />
						<button class="rounded bg-blue py-1 px-1 ml-2" on:click={() => (openGa = !openGa)}
							>{#if openGa}Hide Details{:else}Show Details{/if}</button
						>
						<div class:hidden={!openGa}>
							<p class="text-md font-thin ml-2">
								3rd party analytical tools are used to gather statistical information about our
								visitors. These plugins may share content to 3rd party. Please read their <a
									class="underline"
									href="https://policies.google.com/privacy?hl=en-US">privacy policies</a
								>
								before accepting.
								<br />
								Cookies:
							</p>
							<ul class="text-sm font-thin ml-4">
								<li>_ga (Expires after session)</li>
								<li>_ga_GK2FHC96JT (Expires after session)</li>
							</ul>
						</div>
					</label>
				</div>
				<div class="form-control mb-5">
					<label class="cursor-pointer label">
						<span class="label-text text-lg mr-2">YouTube Embedded Videos</span>
						<input type="checkbox" class="toggle" bind:checked={youtubeCheck} />
						<button class="rounded bg-blue py-1 px-1 ml-2" on:click={() => (openYT = !openYT)}
							>{#if openYT}Hide Details{:else}Show Details{/if}</button
						>
						<div class:hidden={!openYT}>
							<p class="text-md font-thin ml-2">
								Enables embedded Videos from Youtube.com. We use the <em>youtube-nocookie</em> option
								(youtube-nocookie.com) to embed Videos as we respect your privacy. Some cookies will
								be set when you click the video, including the cookies from existing Youtube Sessions.
								Leave this feature off if you don't want to start any connection to YouTube.
							</p>
						</div>
					</label>
				</div>
				<p class="text-sm">
					You can reconfigure this at any time by clicking the cookie icon in the bottom right
					corner!
				</p>
				<a href="/privacy">Privacy Policy</a> |
				<a href="/imprint">Legal Notice</a>
			{/if}
			<div class="flex flex-wrap">
				<button
					class="rounded bg-off-white text-dark px-5 py-2 mt-4"
					on:click={showSettings ? saveAndExit : () => (showSettings = true)}
				>
					{showSettings ? 'Save and Close' : 'Show Settings'}
				</button>
				<button
					class="rounded bg-off-white text-dark px-5 py-2 ml-2 mr-2 mt-4"
					on:click={declineAll}>Decline all cookies</button
				>
				<button class="rounded bg-green text-dark px-5 py-2 mt-4" on:click={acceptCookies}
					>Accept all cookies</button
				>
			</div>
		</div>
	</div>
{:else}
	<button
		title="Open Cookie Consent Window"
		class="z-[9999] rounded-full flex flex-col fixed bg-blue p-2 shadow-xl bottom-2 right-2 max-w-lg text-white"
		on:click={() => (currentSettings.show = true)}
	>
		<Cookie size="1.25rem" />
	</button>
{/if}

<style>
	.consent {
		transition: all 0.5s ease-in-out;
	}
</style>
