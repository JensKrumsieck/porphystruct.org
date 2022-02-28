<script>
	import SimpleIcon from '$lib/components/common/SimpleIcon.svelte';
	import {
		siResearchgate,
		siOrcid,
		siGithub,
		siInstagram,
		siTwitter,
		siYoutube,
		siLinkedin,
		siXing
	} from 'simple-icons/icons';

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

<div class="flex mt-5 py-2 pr-8 rounded-lg">
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
					<SimpleIcon svg={siResearchgate.svg} size="1.25rem" />
				</a>
			{/if}
			{#if orcid != ''}
				<a href={'https://orcid.org/' + orcid}>
					<SimpleIcon svg={siOrcid.svg} size="1.25rem" />
				</a>
			{/if}
			{#if github != ''}
				<a href={'https://github.com/' + github}>
					<SimpleIcon svg={siGithub.svg} size="1.25rem" />
				</a>
			{/if}
			{#if twitter != ''}
				<a href={'https://twitter.com/' + twitter}>
					<SimpleIcon svg={siTwitter.svg} size="1.25rem" />
				</a>
			{/if}
			{#if instagram != ''}
				<a href={'https://instagram.com/' + instagram}>
					<SimpleIcon svg={siInstagram.svg} size="1.25rem" />
				</a>
			{/if}
			{#if youtube != ''}
				<a href={'https://youtube.com/c/' + youtube}>
					<SimpleIcon svg={siYoutube.svg} size="1.25rem" />
				</a>
			{/if}
			{#if xing != ''}
				<a href={'https://www.xing.com/profile/' + xing}>
					<SimpleIcon svg={siXing.svg} size="1.25rem" />
				</a>
			{/if}
			{#if linkedin != ''}
				<a href={'https://www.linkedin.com/in/' + linkedin}>
					<SimpleIcon svg={siLinkedin.svg} size="1.25rem" />
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
