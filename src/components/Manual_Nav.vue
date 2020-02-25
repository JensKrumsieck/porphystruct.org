<template>
    <aside class="menu">
        <h3 class="title is-4">Getting started with PorphyStruct</h3>
        <ul class="menu-list">
            <li><router-link :to="{path: '/manual/get-started'}">Get started</router-link></li>
            <li><router-link :to="{path: '/manual/get-started'}">Installation</router-link></li>
            <li><router-link :to="{path: '/manual/get-started'}">Load Files</router-link></li>
            <li><router-link :to="{path: '/manual/get-started'}">Analyze a Macrocycle</router-link></li>
            <li><router-link :to="{path: '/manual/get-started'}">Perform a Simulation</router-link></li>
            <li><router-link :to="{path: '/manual/get-started'}">Save Data</router-link></li>
        </ul>
    </aside>
</template>

<script>
export default {
  name: 'ManualNav',
  components: {
   }
}
</script>