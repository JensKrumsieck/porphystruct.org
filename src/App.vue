<template>
  <body>
    <header>
      <Navigation/>
    </header>
    <Hero/>
  </body>
</template>

<script>
import Navigation from './components/Navigation'
import Hero from './components/Hero'
export default {
  name: 'App',
  components: {
    Navigation,
    Hero
  }
}
</script>

<style lang="scss">
  $primary: #29384D;
  $secondary: #DC3545;
  $danger: $secondary;
  $size-1: 4.5rem;
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
    &:before{
      content: ' ';
      background: url(./assets/analysis_bg.svg) no-repeat top center/45%;
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
  .navbar{
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    .navbar-item{
      text-transform: uppercase;
    }
    &.sticky{
      background: #ffffff !important;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
      > .container > .navbar-menu > .navbar-end > .navbar-item:not(.is-active):not(:hover) {
        color: $primary;
      }
    }
  }

  .divider-shape{
    > svg{height: 100%; width: 100%;}
    position: absolute;
    bottom: 0px;
    z-index: 0;
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }
  @media (max-width: 769px) {
    .divider-shape{height: 50% !important;}
    .title.is-1{font-size: 3rem !important;}
    .icon-90{height: 50px;}
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
