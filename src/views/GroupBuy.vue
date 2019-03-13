<template>
    <div class='group-buy'>
        <!-- 产品中心-拼团 -->
        <page-brief></page-brief>
        <!-- 增加销量加快资金回流 -->
        <reflow></reflow>
        <!-- 社交分享传播，提升商城影响力 -->
        <share></share>
        <!-- 唤醒沉睡会员促活商城 -->
        <wake></wake>
        <!-- 拼团页面展示 -->
        <show></show>
    </div>
</template>

<script>
    import pageBrief from '../components/group-buy/PageTopBriefIntro'
    import reflow from '../components/group-buy/Reflow.vue'
    import share from '../components/group-buy/Share.vue'
    import wake from '../components/group-buy/Wake.vue'
    import show from '../components/group-buy/Show.vue'
    export default {
        components: {
            pageBrief,
            reflow,
            share,
            wake,
            show
        }
    }
</script>

<style scoped lang='scss'>
    .group-buy {
        width: 100%;
    }
</style>