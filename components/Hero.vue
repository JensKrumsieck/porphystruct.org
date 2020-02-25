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
                            <b-button tag="a" href="https://github.com/JensKrumsieck/PorphyStruct/releases/latest/" type="is-danger">Download</b-button>
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