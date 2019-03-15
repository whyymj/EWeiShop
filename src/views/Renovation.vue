<template>
    <div class='renovation'>
        <!-- 产品中心-店铺装修 -->
        <page-brief></page-brief>
        <!-- 功能演示 -->
        <function-show></function-show>
        <!-- EWEISHOP店铺装修的特色 -->
        <character></character>
        <!-- 优秀设计师装修模板覆盖全行业 -->
        <show></show>
    </div>
</template>

<script>
    import pageBrief from '../components/renovation/PageTopBriefIntro'
    import functionShow from '../components/renovation/FunctionShow.vue'
    import character from '../components/renovation/Character.vue'
    import show from '../components/renovation/Show.vue'
    export default {
        metaInfo: {
            title: '产品中心_店铺装修_自定义装修_所见即所得', // set a title
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
            functionShow,
            character,
            show
        }
    }
</script>

<style scoped lang='scss'>
    .renovation {
        width: 100%;
    }
</style>