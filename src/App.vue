<template>
  <body>
    <header class="header">
      <Navigation/>
    </header>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <Footer />
  </body>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="scss">
  $primary: #29384D;
  $secondary: #DC3545;
  $danger: $secondary;
  $size-1: 4.5rem;
  $menu-item-active-background-color: darken($primary, 10%);
  $menu-item-color: #fff;
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600|Titillium+Web:200,300,300i,400,600&display=swap');
  $family-sans-serif: 'Open Sans';
  @import "~bulma/sass/utilities/_all";
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
  
  h1,h2,h3,h4,h5,h6{
    font-family: 'Titillium Web';
  }
  .icon-90{height: 90px;}
  .hero {
    position: relative;
    &:before{
      content: ' ';
      opacity: 0.5;
      background: url(/img/analysis_bg.svg) no-repeat top center/45%;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 100px;
      z-index: 1;
    }
    > .hero-body{z-index:2;}
    h1{
      font-family: 'Titillium Web';
    }
    * {font-weight: 300 !important;}
    .title, .icon-90{
      vertical-align: middle;
    }
  }
  nav.navbar.is-primary{
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    background: transparent;
    a.navbar-item, a.navbar-link{
      text-transform: uppercase;
      &:not(:last-child){margin-right: 1rem;}
    }
    &.sticky{
      background: #ffffff !important;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
      > .container > .navbar-menu > .navbar-end {
        .navbar-item, .navbar-link {
          &:not(.is-active):not(:hover):not(.button):not(:focus){color: $primary;}
          &:hover > .navbar-link{color: #fff !important;}
        }
      }
    }
  }
  .features{
    background: lighten(desaturate($primary, 5%), 70%);
    .column{
      p, h4{
        > strong{font-weight: 600;}
        font-weight: 400;
        color: $primary;
      }
      z-index: 1;
      position: relative;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      transition: all 0.5s;
      border-radius: 5px;
      overflow:hidden;
      &:hover{
        background: $primary !important;
        p, h4, strong{color: #ffffff; 
       }
        .feature-icon{ 
          color: #ffffff;
          path[fill=none] {
            stroke: #ffffff !important;
          }
          path:not([fill=none]), circle{
              fill: #ffffff !important;
          } 
        }
      }
      .feature-icon{
        position: relative;
        color: $primary;
        width: 90px;
        height: 90px;
        > 
        g {
          opacity: 1.0;
        }
        path[fill=none] {
          stroke: $primary;
        }
        path:not([fill=none]), circle{
            fill: $primary;
        }
      }
    }
  }
  .divider-shape{
    > svg{height: 100%; width: 100%;}
    position: absolute;
    bottom: -1px;
    z-index: 0;
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }
  @media (max-width: 769px) {
    .divider-shape{height: 50% !important;}
    .title.is-1{font-size: 3rem !important;}
    .icon-90{height: 50px;}    
    .tag.badge-conference{display:none !important;}
    .hl-border{width: 13rem !important;}
  }
  @media (min-height: 1300px){
    .divider-shape{height: 35vh !important;}
    .hero.is-fullheight-with-navbar{min-height: calc(50vh - 3.25rem);}
  }

.tag.badge-conference{
	position: absolute;
  color: darken(#ffffff, 35%);
	right: 0;
  top: 0;
  height: auto;
	border: 1px solid #ffffff;
  text-align: center;
	background: darken($primary, 10%) !important;
  .title{margin-bottom: 1rem !important;}
}
.hl-border {  
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  width: 26rem;
  margin: auto;
  padding: 1rem;
  border-bottom: 1px solid rgba($primary, 0.2);
  &:hover{
    font-size: 3.2rem;
  }
}
.scroll-icon{color: rgba($secondary, 0.35);}
figure{
  margin: 1rem;
  > figcaption{font-size: 0.7rem;}
}
.footer{
  background: $primary;
  position: relative;
  svg{vertical-align: middle;}
}

.particles{position: absolute; width: 100%; height: 100%; left:0; top: 0; z-index:0;}
.small{font-size: 0.85rem;}

//margin mixin 
$spaces: (0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100);
$sides: (top, bottom, left, right); 

@each $space in $spaces {
  @each $side in $sides {
    .m-#{str-slice($side, 0, 1)}-#{$space} {
      margin-#{$side}: #{$space}px !important;
    }

    .p-#{str-slice($side, 0, 1)}-#{$space} {
      padding-#{$side}: #{$space}px !important;
    }
  }
}
</style>
