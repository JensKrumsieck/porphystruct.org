<template>
        <div>
            <Title :title="title"/>
            <section class="section">
                <div class="container">
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><nuxt-link :to="{path: '/'}">PorphyStruct</nuxt-link></li>
                        <li><nuxt-link :to="{path: '/manual'}">Manual</nuxt-link></li>
                        <li class="is-active"><nuxt-link :to="{path: $route.path}">{{title}}</nuxt-link></li>
                    </ul>
                    </nav>
                </div>
            </section>
        </div>
</template>
<script>
import Title from '@/components/Title';
export default {
  name: 'ManualHeader',
  props: ['title'],
  components: {
      Title
   }
}
</script>