<script>
	export let notFullHeight = false;
	export let noWrap = false;
</script>

<div
	class:md:min-h-screen={!notFullHeight}
	class:flex-wrap={!noWrap}
	class="flex w-full content-start md:content-evenly md:pb-0 pb-20"
>
	<slot />
</div>
