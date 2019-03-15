<template>
    <div class='resolution'>
        <page-info theme='4大电商运营问题意见解决' detail=''>
            <ul class='resolution-list'>
                <li class='resolution-list__item' v-for='(item,index) in list' :key='index'>
                    <img class='resolution-list__item__icon' v-lazy="item.img" :alt="item.detail">
                    <h6 class='resolution-list__item__title'>{{item.title}}</h6>
                    <span class='resolution-list__item__detail'>{{item.detail}}</span>
                </li>
            </ul>
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
                list: [{
                    img: '/static/image/spike/icon1.png',
                    title: '吸粉难',
                    detail: '秒杀帮您快速积聚粉丝提升影响力'
                }, {
                    img: '/static/image/spike/icon2.png',
                    title: '库存多',
                    detail: '秒杀可刺激用户下单缓解库存压力'
                }, {
                    img: '/static/image/spike/icon3.png',
                    title: '会员活跃度低',
                    detail: '秒杀快速吸引线上流量促活会员'
                }, {
                    img: '/static/image/spike/icon4.png',
                    title: '交易成单低',
                    detail: '秒杀可带动其他商品成单提升营业额'
                }, ]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .resolution {
        background: #fff;
        width: 100%;
        .resolution-list {
            width: 100%;
            margin: 70px 0 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            >.resolution-list__item {
                width: 326px;
                height: 308px;
                margin: 0 9px 70px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                >.resolution-list__item__icon {
                    width: 160px;
                    height: 160px;
                    margin: 0 0 28px;
                }
                >.resolution-list__item__title {
                    width: 100%;
                    font-size: 28px;
                    text-align: center;
                    color: #3b426b;
                    line-height: 28px;
                    margin: 0 0 22px;
                    font-weight: 500;
                }
                >.resolution-list__item__detail {
                    width: 260px;
                    font-size: 24px;
                    text-align: center;
                    color: #7b88a2;
                    line-height: 38px;
                    margin: 0 0 28px;
                }
            }
        }
    }
</style>