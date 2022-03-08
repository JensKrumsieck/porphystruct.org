<script>
	import Time from 'svelte-material-icons/Clock.svelte';
	import User from 'svelte-material-icons/Account.svelte';
	import moment from 'moment';
	export let news;
</script>

<div class="flex place-items-center mt-4 text-dark-dark-blue">
	<User />
	<a class="font-bold ml-1 mr-2" href={news.author.website}>{news.author.name}</a>
	<Time />
	<span class="ml-1">{moment(news.date).fromNow()}</span>
</div>
