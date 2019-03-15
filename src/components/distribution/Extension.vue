<template>
    <div class='extension'>
        <page-info theme='以三级分销为核心的推广矩阵' detail='针对不同行业制定专属分销解决方案，多种营销手段相结合全方位推广营销' :detail-style='detailStyle'>
           <swipe></swipe>
        </page-info>
    </div>
</template>

<script>
    import pageInfo from '../retail/PageMiddleInfo.vue'
    import swipe from './Swipe.vue'
    export default {
        components: {
            pageInfo,
            swipe
        },
        data() {
            return {
                detailStyle: {
                    color:'#5d6494',
                    textAlign:'left',
                    marginTop:'18px'
                }
            }
        },
    }
</script>

<style scoped lang='scss'>
    .extension {
        width: 100%;
        height:919px;
        background: #fff;
        position: relative;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        overflow: hidden;
        margin-top:-10px;
    }
</style>