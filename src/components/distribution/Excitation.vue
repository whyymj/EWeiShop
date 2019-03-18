<template>
    <div class='excitation'>
        <page-info theme='多样化分销激励机制' detail='轻松带领成千上万粉丝为您销售商品'>
            <img class='excitation-bgimg' v-lazy="'/static/image/distribution_scheme/distribution.jpg'" alt="轻松带领成千上万粉丝为您销售商品">
        </page-info>
    </div>
</template>

<script>
    import pageInfo from '../retail/PageMiddleInfo'
    export default {
        components: {
            pageInfo
        },
    }
</script>

<style scoped lang='scss'>
    .excitation {
        width: 100%;
        background: #fff;
        height: 674px;
        position: relative;
        .excitation-bgimg {
            width: 642px;
            height: 415px;
            display: block; 
            margin:50px auto;
        }
    }
</style>