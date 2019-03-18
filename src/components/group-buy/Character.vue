<template>
    <div class='character'>
        <page-info theme='EWEISHOP 拼团的特色' detail=''>
            <img class='character-bgimg' v-lazy="'/static/image/assemble/Assemble-character.jpg'" alt="唤回老会员参与商城拼团活动，通过拼团超低价格吸引老用户参与带动新用户加入，促进订单达成，提升成交率">
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
                    width:'81%'
                }
            }
        },
    }
</script>

<style scoped lang='scss'>
    .character {
        position: relative;
        width: 100%;
        overflow: hidden;
        background-color: #fff;
        .character-bgimg {
            display: block;
            margin:60px auto 70px;
            width: 612px; 
        }
    }
</style>