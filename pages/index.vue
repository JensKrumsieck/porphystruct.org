<template>  
    <div id="index">
      <Hero/>
      <Scrollicon />
      <News />
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
import News from '@/components/News'
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
      News,
      Platform,
      Scrollicon,
      Team
   }
}
</script>
