<template>
  <div class='about-us'>
    <!-- 公司简介 -->
    <page-brief></page-brief>
    <!-- 服务理念 -->
    <service-idea></service-idea>
    <!-- 加入我们 -->
    <join-us></join-us>
    <lazy-component>
      <!-- 地图 -->
      <our-map></our-map>
      <!-- 联系方式 -->
      <contact-us></contact-us>
    </lazy-component>
  </div>
</template>

<script>
  import pageBrief from '../components/about-us/PageTopBriefIntro'
  import serviceIdea from '../components/about-us/ServiceIdea.vue'
  import joinUs from '../components/about-us/JoinUs.vue'
  import ourMap from '../components/about-us/Map.vue'
  import contactUs from '../components/about-us/ContactUs.vue'
  export default {
    metaInfo: {
      title: '关于我们_服务理念_我们的团队_加入我们_联系我们', // set a title
      meta: [{ // set meta
        name: 'keywords',
        content: '新零售，社交电商，分销商城，EWEISHOP，微信商城，微信小程序，微信小程序商城，微信商城管理，三级分销，千人千面'
      }, {
        name: "description",
        content: 'EWEISHOP新零售社交分销商城，一站式社交电商解决方案，多渠道营销，融合线上线下打造健康闭合的电商生态圈，新零售电商'
      }]
    },
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