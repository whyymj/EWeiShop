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