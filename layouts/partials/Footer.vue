<template>
   <footer class="footer">
        <div class="container">
            <div class="columns">
                <div class="footer-logo logo column is-5">
                    <a href="/"><img src="img/logo.svg" style="height: 34px;" alt="logo" /></a>
                    <p class="small copyright has-text-light m-t-30">
                        PorphyStruct by <a href="http://jenskrumsieck.de" class="has-text-light">Jens Krumsieck</a> <br/>
                        (2019 - {{new Date().getFullYear()}})
                    </p>
                    <p class="small made has-text-light m-t-5">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" viewBox="0 0 450 600" preserveAspectRatio="none"><rect width="753.578" height="508.953" x="0" y="0" fill="rgb(0, 0, 0)"></rect><rect width="753.578" height="339.30199999999996" x="0" y="169.65099999999998" fill="rgb(198, 12, 48)"></rect><rect width="753.578" height="169.65099999999998" x="0" y="339.30199999999996" fill="rgb(253, 200, 47)"></rect></svg>
                        Made in Germany
                    </p>
                </div>
                <div class="column footer-menu menu">
                    <ul class="menu-list">
                        <li>
                            <nuxt-link :to="{path: '/'}"><b-icon pack="fa" icon="home" />  Home</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{path: '/support'}"><b-icon pack="fa" icon="life-ring" /> Support</nuxt-link>
                        </li>
                        <li>
                            <a href="https://github.com/JensKrumsieck/PorphyStruct/releases/latest/" target="_blank"><b-icon pack="fa" icon="cloud-download-alt" /> Download</a>
                        </li>
                    </ul>
                </div>
                 <div class="column footer-menu menu">
                    <ul class="menu-list">
                        <li>
                            <nuxt-link :to="{path: '/legal'}"><b-icon pack="fa" icon="balance-scale" /> Legal Notice</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
   </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.footer-menu{
    .menu-list a{ color: #fff;}
    .menu-list a:hover, .menu-list a.is-active{background-color: darken(#29384D, 10%);}
}
    
.footer{
    background: $primary;
    position: relative;
    svg{vertical-align: middle;}
}
</style>
