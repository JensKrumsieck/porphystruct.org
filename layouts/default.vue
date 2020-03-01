<template>
  <div>
    <header class="header">
      <Navigation/>
    </header>
    <main class="main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from './partials/Navigation'
import Footer from './partials/Footer'
export default {
  name: 'default',
  components:{
    Navigation,
    Footer
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
