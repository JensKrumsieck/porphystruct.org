<template>
  <section class="section hero is-primary">
    <div class="container">
      <div class="columns is-vcentered">
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <PorphyStruct />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <h2 class="title is-3">PorphyStruct</h2>
              <h3 class="subtitle">Structural Analysis on Porphyrinoids and Corrinoids</h3>
              <p class="has-text-justified p-r-10">
                The conformation of tetrapyrrolic macrocycles
                <strong>significantly</strong> influences the reactivity and the (photo)physical properties.
                To analyse the conformation by manually is possible, but costs a lot of time. Furthermore, a quantitative analysis is
                not easily possible. PorphyStruct fills this gap - a software for creating displacement diagrams and their analysis.
                <strong>Save your precious time right now</strong>.
              </p>
              <div class="buttons is-right m-t-20">
                <b-button
                  tag="a"
                  href="https://github.com/JensKrumsieck/PorphyStruct/releases/latest/"
                  rel="noreferrer"
                  type="is-danger"
                >Download</b-button>
              </div>
            </div>
          </div>
        </article>
        <figure class="column is-one-third">
          <p class="image video">
            <video autoplay loop muted playsinline>
              <source src="/img/porphystruct.webm" type="video/webm" />
            </video>
          </p>
        </figure>
      </div>
      <Features />
    </div>
  </section>
</template>

<script>
import Features from "@/components/Features";
import PorphyStruct from "@/assets/porphystructlogo.svg";
export default {
  components: {
    PorphyStruct,
    Features
  }
};
</script>

<style lang="scss" scoped>
.media-content{
  overflow: hidden;
  }
strong{color: #ffffff; font-weight: bold;}
.video {
  margin: 5px;
  padding: 15px;
  > video {
    margin: auto;
    text-align: center;
    border-radius: 5px;
  }
}
@media (max-width: 730px){
  .media-left .image.is-128x128{width: 64px; height: 64px;}
}
</style>