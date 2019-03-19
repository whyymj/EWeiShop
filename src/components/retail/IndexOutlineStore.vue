<template>
    <ul class='img-list'>
        <li v-for='(item,index) in imgList' class='img-list__item' :key='index'>
            <img v-lazy="item.img" class='img-list__item__img' :alt="item.title">
            <span class='img-list__item__title' v-html='item.title'></span>
            <span class='img-list__item__content' v-html='item.content'></span>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                imgList: [{
                    img: '/static/image/new-retail/icon1.png',
                    title: '线上线下管理',
                    content: '突破空间限制<br/>快速开店统一管理'
                }, {
                    img: '/static/image/new-retail/icon2.png',
                    title: '会员资源互通',
                    content: '会员数据互通<br/>轻松导入会员引流'
                }, {
                    img: '/static/image/new-retail/icon3.png',
                    title: '促活商城',
                    content: '丰富营销玩法<br/>促活促进订单达成'
                }]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .img-list {
        display: flex;
        height: 299px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 15px;
        justify-content: space-around;
        >.img-list__item {
            width: 222px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 5px;
            position: relative;
            >.img-list__item__img {
                width: 72px;
                height: 72px;
                position: absolute;
                top: 34px;
                left: 0;
                right: 0;
                margin: auto;
            }
            >.img-list__item__title {
                position: absolute;
                top: 139px;
                width: 100%;
                left: 0;
                font-size: 26px;
                text-align: center;
                color: #fff;
            }
            >.img-list__item__content {
                color: #fff;
                position: absolute;
                top: 198px;
                left: 0;
                right: 0;
                margin: auto;
                width: 100%;
                text-align: center;
                line-height: 38px;
                font-size: 24px;
                transform: scale(.9);
            }
        }
    }
</style>