<script>
	import Time from 'svelte-material-icons/Clock.svelte';
	import User from 'svelte-material-icons/Account.svelte';
	import Twitter from 'svelte-material-icons/Twitter.svelte';
	import GitHub from 'svelte-material-icons/GithubCircle.svelte'
	import LinkedIn from 'svelte-material-icons/LinkedIn.svelte';
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
			<a
				class="font-bold ml1 mr-2 flex place-items-center"
				href="http://github.com/{news.author.gitHub}"
				title="@{news.author.gitHub}"
			>
				<GitHub color="#0092CA" />
			</a>			
			<a
				class="font-bold ml1 mr-2 flex place-items-center"
				href="http://linkedin.com/in/{news.author.linkedIn}"
				title="@{news.author.linkedIn}"
			>
				<LinkedIn color="#0092CA" />
			</a>
		</div>
		<div class="flex place-items-center">
			<Time />
			<span class="ml-1 mr-4r" title={moment(news.date).format("YYYY/MM/DD")}>{moment(news.date).fromNow()}</span>
		</div>
	</div>
</div>
