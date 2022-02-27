<script>
    export let _class=""
    export let href = "";
</script>

<a href={href} class="text-lg hover:bg-dark-blue group items-center rounded-md bg-blue text-white font-normal flex px-5 py-2 shadow-sm {_class}">
    <slot/>
</a>