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
</script>

<GoogleAnalytics bind:this={ga} properties={['G-GK2FHC96JT']} enabled={currentSettings.analytics} />
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
						<span class="label-text">Google Analytics</span>
						<input type="checkbox" class="toggle" bind:checked={analyticsCheck} />
					</label>
				</div>
				<div class="form-control mb-5">
					<label class="cursor-pointer label">
						<span class="label-text">YouTube Embedded Videos</span>
						<input type="checkbox" class="toggle" bind:checked={youtubeCheck} />
					</label>
				</div>
				<a href="/privacy">Privacy Policy</a> |
				<a href="/imprint">Legal Notice</a>
			{/if}
			<div class="flex mt-4">
				<button
					class="rounded bg-off-white text-dark px-5 py-2"
					on:click={showSettings ? saveAndExit : () => (showSettings = true)}
				>
					{showSettings ? 'Save and Close' : 'Show Settings'}
				</button>
				<button class="rounded bg-green text-dark px-5 py-2 ml-2" on:click={acceptCookies}
					>Accept all cookies</button
				>
			</div>
		</div>
	</div>
{:else}
	<button title="Open Cookie Consent Window"
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
