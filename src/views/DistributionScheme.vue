<template>
    <div class='distribution-scheme'>
        <!-- 分销解决方案 -->
        <page-brief></page-brief>
        <!-- 出色的三级分销模式 -->
        <dist-model></dist-model>
        <!-- 多样化分销激励机制 -->
        <excitation></excitation>
        <lazy-component>
            <!-- 分销的特色 -->
            <character></character>
            <!-- 以三级分销为核心的推广矩阵 -->
            <extension></extension>
            <!-- 典型分销案例 -->
            <examples></examples>
        </lazy-component>
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
        metaInfo: {
            title: '分销解决方案_三级分销_奖励机制_营销网络', // set a title
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