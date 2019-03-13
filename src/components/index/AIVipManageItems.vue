<template>
    <ul class='ai-vip-items'>
        <li class='ai-vip-items__item' v-for='(item,index) in itemList' :key='index'>
            <div class='ai-vip-items__item__title'>
                <img :src="item.img" :alt="item.itle"><span>{{item.title}}</span>
            </div>
            <span class='ai-vip-items__item__body'>{{item.detail}}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                itemList: [{
                    img: require('../../assets/image/index/vip_icon_1.png'),
                    title: '会员管理',
                    detail: '轻松维护管理会员'
                }, {
                    img: require('../../assets/image/index/vip_icon_2.png'),
                    title: '会员营销',
                    detail: '专属营销解决方案'
                }, {
                    img: require('../../assets/image/index/vip_icon_3.png'),
                    title: '会员标签',
                    detail: '实现个性化营销'
                }, ]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .ai-vip-items {
        width: 702px;
        height: 72px;
        display: flex;
        flex-wrap: nowrap;
        margin:0 auto 72px;
        >.ai-vip-items__item {
            box-sizing: border-box;
            border-right: 1px solid #ddd;
            width: 33.4%;
            height: 72px;
            &:last-child {
                border: none;
            }
            >.ai-vip-items__item__title {
                height: 30px;
                width: 100%;
                text-align: center;
                margin-bottom: 24px;
                >img {
                    width: 30px;
                    height: 30px;
                    margin-right:14px;
                    vertical-align:top;
                }
                >span{
                    line-height: 30px;
                    font-size: 30px;
                    color:#424268;
                    font-weight: 400;
                }
            }
            >.ai-vip-items__item__body{
                font-size: 24px;
                line-height: 24px;
                text-align: center;
                display: block;
                width: 100%;
                color:#828896;
            }
        }
    }
</style>