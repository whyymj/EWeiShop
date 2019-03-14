<template>
    <div class='extension'>
        <page-info theme='玩转社交电商，解锁多种盈利方式' detail='鼓励会员主动分享传播，一次锁定会员多次盈利，提升商城复购率' :detail-style='detailStyle'>
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
                    // color:'#5d6494',
                    textAlign:'left',
                    margin:'23px auto 0'
                }
            }
        },
    }
</script>

<style scoped lang='scss'>
    .extension {
        width: 100%;
        height:812px;
        background: #fff;
        position: relative;
        overflow: hidden;
    }
</style>