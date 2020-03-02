<template>
  <section class="section news">
    <div class="container">
      <nav class="columns is-multiline">
        <div class="column has-text-centered is-one-third">
            <Dates />
        </div>
        <!--show 2 blog posts here-->
        <div class="column is-one-third">
            <div class="media">
                <figure class="media-image">
                    <p class="image">
                        <img src="/img/laptop.png" />
                    </p>
                </figure>
                 <div class="media-body has-text-justified">
                        <div class="content">
                        <h3 class="title is-5">Sample Blog Post #1</h3> 
                        <p class="is-size-7">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur  
                        </p>
                    </div>
                 </div>
            </div>
        </div>        
        <div class="column has-text-centered is-one-third">
            <div class="media">
                <figure class="media-image">
                    <p class="image">
                        <img src="/img/isopor.png" />
                    </p>
                </figure>
                 <div class="media-body has-text-justified">
                        <div class="content">
                        <h3 class="title is-5">Sample Blog Post #2</h3> 
                        <p class="is-size-7">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur  
                        </p>
                    </div>
                 </div>
            </div>
        </div>        
      </nav>
    </div>
  </section>
</template>

<script>
import Dates from "@/components/Dates";
export default {
  components: {
    Dates
  }
};
</script>

<style lang="scss" scoped>
.icon{width: 3rem;}
.column{
  position: relative;
  }
.media {
    padding-bottom: 2rem;
    padding-top: 2rem;
    p{text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);}
    > .media-image{
        position: absolute;
        opacity: 0.15;
        left: 0;
        z-index: -1;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        img{
          max-height: 100%;
          max-width: 100%;
          margin: auto;
          height: auto;
          width: auto;
        }
        .image{
          height: 100%;
          width: 100%;
          }
    }      
}
</style>

<style lang="scss">
.news .media .title{text-align: center;}
</style>