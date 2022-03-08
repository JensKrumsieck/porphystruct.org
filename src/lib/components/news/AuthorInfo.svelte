<script>
	import Time from 'svelte-material-icons/Clock.svelte';
	import User from 'svelte-material-icons/Account.svelte';
	import Twitter from 'svelte-material-icons/Twitter.svelte';
	import moment from 'moment';
	export let news;
</script>

<div class="flex flex-wrap place-items-center mt-4 text-dark-dark-blue">
	<div class="flex">
		<div class="flex place-items-center">
			<User />
			<a class="font-bold ml-1 mr-2" href={news.author.website}>{news.author.name}</a>
			<a
				class="font-bold ml1 mr-2 flex place-items-center"
				href="http://twitter.com/{news.author.twitter}"
				title="@{news.author.twitter}"
			>
				<Twitter color="#0092CA" />
			</a>
		</div>
		<div class="flex place-items-center">
			<Time />
			<span class="ml-1 mr-4r">{moment(news.date).fromNow()}</span>
		</div>
	</div>
	<div class="flex place-items-center">
		{#each news.tags as tag}
			<span class="rounded-full bg-dark text-white px-2 py-0.5 ml-2">{tag}</span>
		{/each}
	</div>
</div>
