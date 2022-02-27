<script>
	import SimpleIcon from '$lib/components/common/SimpleIcon.svelte';
	export let img = '';
	export let url = '';
	export let name = '';

	export let researchgate = '';
	export let orcid = '';
	export let twitter = '';
	export let instagram = '';
	export let youtube = '';
	export let xing = '';
	export let github = '';
	export let linkedin = '';
</script>

<div class="flex mt-5 py-2 pr-8 bg-white rounded-lg">
	<figure class="w-16 h-16 rounded-full bg-dark overflow-hidden">
		{@html img}
	</figure>
	<div class="ml-5">
		<h4 class="font-bold text-xl">
			<a href={url}>{name}</a>
		</h4>
		<p class="flex social">
			{#if researchgate != ''}
				<a href={'https://www.researchgate.net/profile/' + researchgate}>
					<SimpleIcon slug="ResearchGate" size="1.25rem" />
				</a>
			{/if}
			{#if orcid != ''}
				<a href={'https://orcid.org/' + orcid}>
					<SimpleIcon slug="orcid" size="1.25rem" />
				</a>
			{/if}
			{#if github != ''}
				<a href={'https://github.com/' + github}>
					<SimpleIcon slug="github" size="1.25rem" />
				</a>
			{/if}
			{#if twitter != ''}
				<a href={'https://twitter.com/' + twitter}>
					<SimpleIcon slug="Twitter" size="1.25rem" />
				</a>
			{/if}
			{#if instagram != ''}
				<a href={'https://instagram.com/' + instagram}>
					<SimpleIcon slug="instagram" size="1.25rem" />
				</a>
			{/if}
			{#if youtube != ''}
				<a href={'https://youtube.com/c/' + youtube}>
					<SimpleIcon slug="youtube" size="1.25rem" />
				</a>
			{/if}
			{#if xing != ''}
				<a href={'https://www.xing.com/profile/' + xing}>
					<SimpleIcon slug="xing" size="1.25rem" />
				</a>
			{/if}
			{#if linkedin != ''}
				<a href={'https://www.linkedin.com/in/' + linkedin}>
					<SimpleIcon slug="linkedin" size="1.25rem" />
				</a>
			{/if}
		</p>
	</div>
</div>

<style lang="scss">
	.social > a {
		margin: 0.25em;
		&:hover {
			fill: #0092ca;
		}
	}
</style>
