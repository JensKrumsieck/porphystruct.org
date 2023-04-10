<script>
    export let _class=""
    export let href = "";
    export let outlined = false
</script>

{#if outlined}
<a href={href} class="text-md items-center rounded-md font-normal flex px-5 py-2 shadow-sm border-2 border-blue hover:border-dark-blue {_class}">
    <slot/>
</a>
{:else}
<a href={href} class="text-lg hover:bg-dark-blue items-center rounded-md bg-blue text-white font-normal flex px-5 py-2 shadow-sm {_class}">
    <slot/>
</a>

{/if}