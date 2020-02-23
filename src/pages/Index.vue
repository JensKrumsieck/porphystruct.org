<template>  
    <div id="index">
      <Hero/>
      <Features/>
    </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
export default {
  name: 'Index',
  components: {
      Hero,
      Features
   }
}
</script>