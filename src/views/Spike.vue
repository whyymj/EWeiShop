<template>
    <div class='spike'>
        <!-- 产品中心-秒杀 -->
        <page-brief></page-brief>
        <!-- 4大电商运营问题意见解决 -->
        <resolution></resolution>
        <!-- 快速聚焦秒杀活动交易达成 -->
        <easy-reach></easy-reach>
        <!-- 秒杀页面展示 -->
        <show></show>
        <!--EWEISHOP 秒杀的特色 -->
        <character></character>
    </div>
</template>

<script>
    import pageBrief from '../components/spike/PageTopBriefIntro'
    import resolution from '../components/spike/Resolution.vue'
    import easyReach from '../components/spike/EasyReach.vue'
    import show from '../components/spike/Show.vue'
    import character from '../components/spike/Character.vue'
    export default {
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