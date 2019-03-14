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