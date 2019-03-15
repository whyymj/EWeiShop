<template>
    <div class='social-contact'>
        <!-- 社交电商解决方案 -->
        <page-brief></page-brief>
        <!-- 基于社交圈低成本裂变营销 -->
        <market-items></market-items>
        <!-- 基于社交圈低成本裂变营销22222 -->
        <market-model></market-model>
        <!-- 玩转社交电商，解锁多种盈利方式 -->
        <extension></extension>
    </div>
</template>

<script>
    import pageBrief from '../components/social/PageTopBriefIntro'
    import marketItems from '../components/social/MarketingItems.vue'
    import marketModel from '../components/social/DistributeModel.vue'
    import extension from '../components/social/Extension.vue'
    export default {
        metaInfo: {
            title: '产品中心_秒杀_快速聚焦促进订单达成', // set a title
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
            marketItems,
            marketModel,
            extension
        }
    }
</script>

<style scoped lang='scss'>

</style>