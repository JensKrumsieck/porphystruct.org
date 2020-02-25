import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import Index from './pages/Index'
import Support from './pages/Support'
import Imprint from './pages/Imprint'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(Buefy);
Vue.use(VueParticles);

const routes = [
  {path: '/', name: 'start', component: Index},
  {path: '/support', name: 'support', component: Support},
  {path: '/imprint', name: 'imprint', component: Imprint}
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: "is-active"
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router,
  methods: {
    /*eslint-disable no-unused-vars*/
    handleScroll (_event) {
      /*eslint-enable no-unused-vars*/
      var content = document.getElementsByTagName("section").item(0).getBoundingClientRect();
      var nav = document.getElementsByClassName("navbar").item(0);
    
      var logo = document.getElementsByClassName("navbar-brand").item(0).getElementsByTagName("img").item(0);
    
      if (content.top < nav.getBoundingClientRect().top) {
        if (!nav.classList.contains('sticky')) {
          //add sticky
          nav.classList.add('sticky');
          //change to dark logo
          logo.src = "img/logo_dark.svg";
        }
      }
      else if (nav.classList.contains('sticky')) {
        //remove sticky
        nav.classList.remove('sticky');
        //change to light logo
        logo.src = "img/logo.svg";
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  }
}).$mount('body')
