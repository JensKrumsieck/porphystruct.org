<template>
    <b-navbar fixed-top spaced type="is-primary" wrapperClass="container">
        
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{path: '/'}">
                    <img src="/img/logo.svg" alt="logo" class="logo" />
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item tag="router-link" :to="{path: '/'}">
                    Home
                </b-navbar-item>
                 <b-navbar-item tag="a" href="/hallo">
                    tets
                </b-navbar-item>
            </template>
    </b-navbar>
</template>
<script>
export default {
  name: 'Navigation',
  components: {
  }
}
</script>
<style scoped>
    .logo{
        height: 34px;
    }
    .navbar-brand > a.navbar-item.is-active{background: none !important;}
</style>