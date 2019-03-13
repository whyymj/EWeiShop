<template>
    <div class='distribution-scheme'>
        <!-- 分销解决方案 -->
        <page-brief></page-brief>
        <!-- 出色的三级分销模式 -->
        <dist-model></dist-model>
        <!-- 多样化分销激励机制 -->
        <excitation></excitation>
        <!-- 分销的特色 -->
        <character></character>
        <!-- 以三级分销为核心的推广矩阵 -->
        <extension></extension>
        <!-- 典型分销案例 -->
        <examples></examples>
    </div>
</template>

<script>
    import pageBrief from '../components/distribution/PageTopBriefIntro'
    import distModel from '../components/distribution/DistributeModel.vue'
    import excitation from '../components/distribution/Excitation.vue'
    import character from '../components/distribution/Character.vue'
    import extension from '../components/distribution/Extension'
    import examples from '../components/distribution/Examples'
    export default {
        components: {
            pageBrief,
            distModel,
            excitation,
            character,
            extension,
            examples
        }
    }
</script>

<style scoped>

</style>