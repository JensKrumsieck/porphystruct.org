<template>
  <div>
    <header class="header">
      <Navigation/>
    </header>
    <main class="main">    
        <manual-header :title="title"/> 
        <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from './partials/Navigation'
import ManualHeader from './partials/ManualHeader'
import Footer from './partials/Footer'
export default {     
    components:{
        ManualHeader,
        Navigation,
        Footer
    },
    computed:{
        title(){
            return this.$route.matched.map((r) => {
                return (r.components.default.options ? r.components.default.options.pageTitle : r.components.default.pageTitle)
            })[0]
        }
    },
    methods: {
      handleScroll () {
        var content = document.getElementsByTagName("section").item(0).getBoundingClientRect();
        var nav = document.getElementsByClassName("navbar").item(0);
        
        var logo = document.getElementsByClassName("navbar-brand").item(0).getElementsByTagName("img").item(0);
        
        if (content.top < nav.getBoundingClientRect().top) {
            if (!nav.classList.contains('sticky')) {
            //add sticky
            nav.classList.add('sticky');
            //change to dark logo
            logo.src = "/img/logo_dark.svg";
            }
        }
        else if (nav.classList.contains('sticky')) {
            //remove sticky
            nav.classList.remove('sticky');
            //change to light logo
            logo.src = "/img/logo.svg";
        }
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll);
    }
}
</script>
