<template>
    <div class='reflow'>
        <page-info theme='增加销量加快资金回流' :detail-style='detailStyle' detail='快速积累人气和流量，帮助您环节库存压力，快速卖货，回笼资金，提升订单成交率'>
            <img class='reflow-bgimg' src="../../assets/image/assemble/speed-distribution.png" alt="轻松带领成千上万粉丝为您销售商品">
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
                    textAlign: 'left'
                }
            }
        },
    }
</script>

<style scoped lang='scss'>
    .reflow {
        position: relative;
        width: 100%;
        height: 680px;
        overflow: hidden;
        background-color: #fff;
        .reflow-bgimg {
            display: block;
            margin:50px auto;
            width: 567px;
            height: 321px; 

        }
    }
</style>