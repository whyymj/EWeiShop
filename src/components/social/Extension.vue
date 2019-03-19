<template>
    <div class='extension'>
        <page-info :theme='getTip.theme' :detail='getTip.detail' :detail-style='detailStyle'>
            <swipe @swipe='swipe'></swipe>
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
                    textAlign: 'left',
                    margin: '23px auto 0'
                },
                showTip: {},
                curIndex: 0,
                tips: [{
                    theme: '玩转社交电商，解锁多种盈利方式',
                    detail: '鼓励会员主动分享传播，一次锁定会员多次盈利，提升商城复购率'
                }, {
                    theme: '朋友圈口碑传播，建立个性电商',
                    detail: '依托微信10亿强社交网络，协助您推广宣传，快速打开电商市场'
                }, ]
            }
        },
        computed: {
            getTip() {
                return this.tips[this.curIndex]
            }
        },
        methods: {
            swipe(index) {
                this.curIndex = index;
            }
        }
    }
</script>

<style scoped lang='scss'>
    .extension {
        width: 100%;
        height: 812px;
        background: #fff;
        position: relative;
        overflow: hidden;
    }
</style>