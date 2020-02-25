<template>  
    <div id="index">
      <Hero/>
      <Scrollicon />
      <Story />
      <Features class="m-t-50" />
      <Cycles class="m-t-50" />
      <Team />
      <Platform />
    </div>
</template>

<script>
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Story from '@/components/Story'
import Scrollicon from '@/components/Scrollicon'
import Platform from '@/components/Platform'
import Cycles from '@/components/Cycles'
import Team from '@/components/Team'
export default {
  name: 'Index',
  components: {
      Hero,
      Features,
      Story,
      Platform,
      Scrollicon,
      Cycles,
      Team
   }
}
</script>