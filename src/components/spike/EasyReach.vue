<template>
    <div class='easy-reach'>
        <page-info theme='快速聚焦秒杀活动交易达成' detail=''>
            <ul class='easy-reach-list'>
                <li class='easy-reach-list__item' v-for='(item,index) in list' :key='index'>
                    <img class='easy-reach-list__item__icon' v-lazy="item.img" :alt="item.detail">
                    <h6 class='easy-reach-list__item__title'>{{item.title}}</h6>
                    <span class='easy-reach-list__item__detail' v-html='item.detail'></span>
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
                    title: '秒杀活动预热',
                    detail: '增加店铺粉丝<br/>提升店铺品牌关注度'
                }, {
                    img: '/static/image/spike/focus2.png',
                    title: '独立库存',
                    detail: '合理调控库存<br/>解决库存积压'
                }, {
                    img: '/static/image/spike/focus3.png',
                    title: '营销必备利器',
                    detail: '吸引更多会员<br/>带动店铺整体销量'
                }, {
                    img: '/static/image/spike/focus4.png',
                    title: '独立秒杀价格',
                    detail: '便于您进行秒杀商品管理<br/>产生更多订单'
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
                box-shadow: rgba(229,228,228,.5) 0 0 16px ;
                border-radius: 10px;
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
                    width: 100%;
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