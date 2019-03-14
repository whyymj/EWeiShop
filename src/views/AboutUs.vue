<template>
  <div class='about-us'>
    <page-brief></page-brief>
    <service-idea></service-idea>
    <join-us></join-us>
    <our-map></our-map>
    <contact-us></contact-us>
  </div>
</template>

<script>
  import pageBrief from '../components/about-us/PageTopBriefIntro'
  import serviceIdea from '../components/about-us/ServiceIdea.vue'
  import joinUs from '../components/about-us/JoinUs.vue'
  import ourMap from '../components/about-us/Map.vue'
  import contactUs from '../components/about-us/ContactUs.vue'
  export default {
    components: {
      pageBrief,
      serviceIdea,
      joinUs,
      ourMap,
      contactUs
    }
  }
</script>


<style scoped lang='scss'>

</style>