<template>
    <section class="hero is-primary is-fullheight-with-navbar">
    <client-only><vue-particles color="#e9edf2" linesColor="#e9edf2" class="particles" :particleOpacity="0.1" :lineOpacity="0.1" :moveSpeed="1" /></client-only>
      <div class="hero-body">
          <div class="container">
               <div class="columns is-vcentered">
                   <div class="column">
                       <h1 class="title is-1 is-spaced"><PorphyStruct class="icon-90" /> PorphyStruct</h1>
                        <p class="has-text-justified m-t-50">PorphyStruct is an open source project working on methods to analyze the <i>pigments of life</i>.
                            Porphyrinoids and Corrinoids altogether show recurring conformational patterns in their solid 
                            state structures which can be described by linear combination of their lowest energy vibrational 
                            modes.
                        </p>

                        <div class="buttons is-right m-t-20">
                            <b-button tag="a" href="https://github.com/JensKrumsieck/PorphyStruct/releases/latest/" rel="noreferrer" type="is-danger">Download</b-button>
                        </div>
                   </div>
                   <div class="column">
                       <Laptop  /> 
                       <!--conference badge-->
                        <div class="tag badge-conference columns">
                            <div class="column">
                                <PorphyStruct class="icon-90" />
                            </div>
                            <div class="column">
                                <h4 class="title is-5">ICPP-11</h4>                            
                                <p class="is-size-7">
                                    June 28 - July 3 2020<br />
                                    International Conference on <br />
                                    Porphyrins and Phtalocyanines <br />
                                    in Buffalo, NY, USA
                                </p>
                            </div>
                        </div>
                   </div>
               </div>
          </div>
      </div>
      <div class="top-shape divider-shape">
		<svg xmlns="http://www.w3.org/2000/svg" class="w-100 h-100" viewBox="0 0 1440 320" preserveAspectRatio="none"><path transform="translate(1440, 0) scale(-1 1)" fill="#FFFFFF" fill-opacity="1" d="M0,32L80,64C160,96,320,160,480,208C640,256,800,288,960,288C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
	</div>
    </section>
</template>
<script>
import PorphyStruct from '@/assets/porphystructlogo.svg';
import Laptop from '@/assets/laptop.svg';
export default {
  name: 'Hero',
  components: {
      PorphyStruct,
      Laptop
  }
}
</script>

<style lang="scss">
.particles{position: absolute; width: 100%; height: 100%; left:0; top: 0; z-index:0;}
@media (min-height: 1300px){
    .divider-shape{height: 35vh !important;}
    .hero.is-fullheight-with-navbar{min-height: calc(50vh - 3.25rem);}
}
  @media (max-width: 769px) {
    .divider-shape{height: 50% !important;}
    .hl-border{width: 15rem !important;}
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
      z-index: 0;
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
</style>