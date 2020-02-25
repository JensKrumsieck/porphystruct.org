<template>
    <b-navbar fixed-top spaced type="is-primary" wrapperClass="container">
        
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{path: '/'}">
                    <img src="img/logo.svg" alt="logo" class="logo" />
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item tag="router-link" :to="{path: '/'}">
                    Home
                </b-navbar-item>
                <div class="navbar-item has-dropdown is-hoverable">
                    <router-link :to="{path: '/support'}" class="navbar-link">
                        Support                   
                    </router-link>
                    <div class="navbar-dropdown">
                        <b-navbar-item tag="router-link" :to="{path: '/manual'}">
                            User Manual
                        </b-navbar-item>
                        <b-navbar-item tag="a" href="https://github.com/JensKrumsieck/PorphyStruct/issues">
                            GitHub Issues
                        </b-navbar-item>
                    </div>
                </div>
                <b-navbar-item tag="a" href="https://github.com/JensKrumsieck/PorphyStruct/releases/latest/" class="button is-danger">
                    Download
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