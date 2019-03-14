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
            <page-info theme='智能会员管理' detail='让您更了解会员的消费习惯'>
                <img class="AI-vip-management__bg-img" v-lazy='"/static/image/index/vip-pic.png"' alt="智能会员管理">
                <ai-vip-items></ai-vip-items>
            </page-info>
        </div>
        <!-- 数据可视化展示 -->
        <data-visible></data-visible>
        <!-- 一站式电商服务 -->
        <one-stop-service></one-stop-service>
        <!-- 新闻资讯 -->
        <news-info></news-info>
    </div>
</template>

<script>
    import pageBrief from '../components/index/PageTopBriefIntro'
    import pageInfo from '../components/retail/PageMiddleInfo'
    import dataMining from '../components/index/DataMining.vue'
    import aiVipItems from '../components/index/AIVipManageItems.vue'
    import dataVisible from '../components/index/DataVisible.vue'
    import oneStopService from '../components/index/OneStopService.vue'
    import newsInfo from '../components/index/NewsInfo.vue'
    export default {
        components: {
            pageBrief,
            pageInfo,
            dataMining,
            aiVipItems,
            dataVisible,
            oneStopService,
            newsInfo
        },
    }
</script>

<style scoped lang='scss'>
    .home {
        background: #fbfbfb;
        overflow: hidden;
        >.AI-vip-management {
            background: #fff;
            overflow: hidden;
            .AI-vip-management__bg-img {
                width: 494px;
                display: block;
                margin: 50px auto 70px;
            }
        }
    }
</style>