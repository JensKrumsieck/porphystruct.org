<script>
	import moment from 'moment';
	import AuthorInfo from './AuthorInfo.svelte';
	export let news;
</script>

<div class="bg-off-white rounded shadow">
	<a class="block" href={`/news/${moment(news.date).format('YYYY/MM')}/${news.slug}`}>
		<figure
			class="mb-8 text-center h-48 rounded-t bg-center bg-cover"
			style={`background-image: url(${news.image != undefined ? news.image : '/ps_logo.svg'});`}
		/>
		<div class="p-4">
			<div class="h-36 overflow-hidden">
				<div class="flex place-items-center">
					{#each news.tags as tag}
						<span class="rounded-full bg-dark text-white text-sm px-2 py-0.5 mr-2 mb-2">{tag}</span>
					{/each}
				</div>
				<h3 class="text-2xl font-semibold">
					<a href={`/news/${moment(news.date).format('YYYY/MM')}/${news.slug}`}>
						{news.title}
					</a>
				</h3>
				<p class="mt-2 content prose prose-lg max-w-none prose-headings:font-bold">
					{@html news.excerpt}
				</p>
			</div>
		</div>
	</a>
	<div class="p-4">
		<AuthorInfo {news} />
	</div>
</div>
