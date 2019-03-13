<template>
    <div class='home'>
        <!-- swipe -->
        <page-brief></page-brief>
        <!-- 深度挖掘十亿微信流量 -->
        <div class="data-mining">
            <page-info theme='深度挖掘十亿微信流量' detail='突破传统电商瓶颈，针对不同行业制定专属解决方案'></page-info>
            <data-mining></data-mining>
        </div>
        <!-- 智能会员管理     -->
        <div class="AI-vip-management">
            <page-info theme='智能会员管理' detail='让您更了解会员的消费习惯'></page-info>
        </div>
    </div>
</template>

<script>
    import pageBrief from '../components/index/PageTopBriefIntro'
    import pageInfo from '../components/retail/PageMiddleInfo'
    import dataMining from '../components/index/DataMining.vue'
    export default {
        components: {
            pageBrief,
            pageInfo,
            dataMining
        }
    }
</script>

<style scoped lang='scss'>
    .home {
        background: #fbfbfb;
        overflow: hidden;
        >.AI-vip-management{
            background: #fff;
        }
    }
</style>