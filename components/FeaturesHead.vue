<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <article class="media columns is-two-third is-vcentered">
          <figure class="media-left">
            <p class="image is-128x128">
              <PorphyStruct />
            </p>
          </figure>
          <div class="media-content">
            <h2 class="title is-3">PorphyStruct</h2>
            <h3 class="subtitle">Structural Analysis on Porphyrinoids and Corrinoids</h3>
            <p class="has-text-justified">
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
        </article>
        <figure class="column is-one-third">
          <p class="image p-l-10">
            <video autoplay loop muted playsinline>
              <source src="/img/porphystruct.webm" type="video/webm" />
            </video>
          </p>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
import PorphyStruct from "@/assets/porphystructlogo.svg";
export default {
  components: { PorphyStruct }
};
</script>

<style lang="scss" scoped>
.section {
  background: lighten(desaturate($primary, 5%), 70%);
}
</style>