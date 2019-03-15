<template>
    <div class='share'>
        <page-info theme='社交分享传播，提升商城影响力' :detail-style='detailStyle' detail='自带10亿微信活跃用户，指数级裂变传播，迅速增加商城曝光率，提高知名度推动商品销量大爆发'>
            <img class='share-bgimg' v-lazy="'/static/image/assemble/social-blob.png'" alt="轻松带领成千上万粉丝为您销售商品">
        </page-info>
    </div>
</template>

<script>
    import pageInfo from '../retail/PageMiddleInfo'
    export default {
        components: {
            pageInfo
        },
        data() {
            return {
                detailStyle: {
                    textAlign: 'left',
                      marginTop:'22px'
                }
            }
        },
    }
</script>

<style scoped lang='scss'>
    .share {
        position: relative;
        width: 100%;
        height: 720px;
        overflow: hidden;
        background-color: #fafafa;
        .share-bgimg {
            display: block;
            margin:50px auto;
            width: 412px;
            height: 374px; 

        }
    }
</style>