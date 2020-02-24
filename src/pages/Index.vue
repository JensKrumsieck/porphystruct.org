<template>  
    <div id="index">
      <Hero/>
      <Scrollicon />
      <Story />
      <Features/>
      
    </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Story from '@/components/Story'
import Scrollicon from '@/components/Scrollicon'
export default {
  name: 'Index',
  components: {
      Hero,
      Features,
      Story,
      Scrollicon
   }
}
</script>