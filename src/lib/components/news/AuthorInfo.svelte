<script>
	import Time from 'svelte-material-icons/Clock.svelte';
	import User from 'svelte-material-icons/Account.svelte';
	import Twitter from 'svelte-material-icons/Twitter.svelte';
	import moment from 'moment';
	export let news;
</script>

<div class="flex place-items-center mt-4 text-dark-dark-blue">
	<User />
	<a class="font-bold ml-1 mr-2" href={news.author.website}>{news.author.name}</a>
	<a
		class="font-bold ml1 mr-2 flex place-items-center"
		href="http://twitter.com/{news.author.twitter}"
		title="@{news.author.twitter}"
	>
		<Twitter color="#0092CA" />
	</a>
	<Time />
	<span class="ml-1 mr-4">{moment(news.date).fromNow()}</span>
	{#each news.tags as tag}
		<span class="rounded-full bg-dark text-white px-2 py-0.5 ml-2">{tag}</span>
	{/each}
</div>
