<template>
    <div class='easy-reach'>
        <page-info theme='快速聚焦秒杀活动交易达成' detail=''>
            <ul class='easy-reach-list'>
                <li class='easy-reach-list__item' v-for='(item,index) in list' :key='index'>
                    <img class='easy-reach-list__item__icon' v-lazy="item.img" :alt="item.detail">
                    <h6 class='easy-reach-list__item__title'>{{item.title}}</h6>
                    <span class='easy-reach-list__item__detail'>{{item.detail}}</span>
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
                    img: '/static/image/spike/focus1.png',
                    title: '吸粉难',
                    detail: '秒杀帮您快速积聚粉丝提升影响力'
                }, {
                    img: '/static/image/spike/focus2.png',
                    title: '库存多',
                    detail: '秒杀可刺激用户下单缓解库存压力'
                }, {
                    img: '/static/image/spike/focus3.png',
                    title: '吸粉难',
                    detail: '秒杀快速吸引线上流量促活会员'
                }, {
                    img: '/static/image/spike/focus4.png',
                    title: '吸粉难',
                    detail: '秒杀可带动其他商品成单提升营业额'
                }, ]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .easy-reach {
        background: #fafafa;
        width: 100%;
        .easy-reach-list {
             overflow: hidden;
            width: 100%;
            margin: 70px 0 52px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            >.easy-reach-list__item {
                overflow: hidden;
                width: 326px; 
                margin: 0 9px 18px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                background: #fff;
                box-shadow: #e5e4e4 0 0 16px 50%;
                >.easy-reach-list__item__icon {
                    width: 168px;
                    height: 168px;
                    margin: 0 ;
                }
                >.easy-reach-list__item__title {
                    width: 100%;
                    font-size: 28px;
                    text-align: center;
                    color: #3b426b;
                    line-height: 28px;
                    margin: 0 0 32px;
                    font-weight: 500;
                }
                >.easy-reach-list__item__detail {
                    width: 260px;
                    font-size: 24px;
                    text-align: center;
                    color: #7b88a2;
                    line-height: 38px;
                    margin: 0 0 50px;
                }
            }
        }
    }
</style>