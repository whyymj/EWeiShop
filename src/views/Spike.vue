<template>
    <div class='spike'>
        <!-- 产品中心-秒杀 -->
        <page-brief></page-brief>
        <!-- 4大电商运营问题意见解决 -->
        <resolution></resolution>
        <!-- 快速聚焦秒杀活动交易达成 -->
        <easy-reach></easy-reach>
        <lazy-component>
            <!-- 秒杀页面展示 -->
            <show></show>
            <!--EWEISHOP 秒杀的特色 -->
            <character></character>
        </lazy-component>
    </div>
</template>

<script>
    import pageBrief from '../components/spike/PageTopBriefIntro'
    import resolution from '../components/spike/Resolution.vue'
    import easyReach from '../components/spike/EasyReach.vue'
    import show from '../components/spike/Show.vue'
    import character from '../components/spike/Character.vue'
    export default {
        metaInfo: {
            title: '新零售解决方案_助力传统电商转型新零售_人,货,场', // set a title
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
            resolution,
            easyReach,
            show,
            character
        },
    }
</script>

<style scoped lang='scss'>
    .spike {
        width: 100%;
    }
</style>