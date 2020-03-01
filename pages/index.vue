<template>  
    <div id="index">
      <Hero/>
      <Scrollicon />
      <FeaturesHead />
      <InDepthFeatures />
      <Story />
      <Team />
      <Platform />
    </div>
</template>

<script>
import FeaturesHead from "@/components/FeaturesHead";
import InDepthFeatures from "@/components/InDepthFeatures";
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Scrollicon from '@/components/Scrollicon'
import Platform from '@/components/Platform'
import Team from '@/components/Team'
export default {
  name: 'Index',
  components: {
      Hero,
      FeaturesHead,
      InDepthFeatures,
      Story,
      Platform,
      Scrollicon,
      Team
   }
}
</script>
