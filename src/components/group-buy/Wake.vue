<template>
    <div class='wake'>
        <page-info theme='唤醒沉睡会员促活商城' :detail-style='detailStyle' detail='唤回老会员参与商城拼团活动，通过拼团超低价格吸引老用户参与带动新用户加入，促进订单达成，提升成交率'>
            <img class='wake-bgimg' v-lazy="'/static/image/assemble/wake-vip.jpg'" alt="唤回老会员参与商城拼团活动，通过拼团超低价格吸引老用户参与带动新用户加入，促进订单达成，提升成交率">
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
                    width:'81%',
                      marginTop:'22px'
                }
            }
        },
    }
</script>

<style scoped lang='scss'>
    .wake {
        position: relative;
        width: 100%;
        height: 754px;
        overflow: hidden;
        background-color: #fff;
        .wake-bgimg {
            display: block;
            margin:50px auto;
            width: 445px; 

        }
    }
</style>