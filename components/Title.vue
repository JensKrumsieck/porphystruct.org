<template>
  <section class="hero is-primary is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="is-spaced title is-1">{{title}}</h1>
        <h2 v-if="subtitle" class="subtitle is-2">{{subtitle}}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Title',
  props: ['title', 'subtitle'],
  components: {
      
   }
}
</script>