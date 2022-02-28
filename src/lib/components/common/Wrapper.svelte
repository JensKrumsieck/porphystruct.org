<script>
    export let notFullHeight = false;
</script>
<div class:md:min-h-screen={!notFullHeight} class="flex w-full flex-wrap content-start md:content-evenly md:pb-0 pb-20">
    <slot/>
</div>