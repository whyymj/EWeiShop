<template>
    <div class='item-detail'>
        <img v-lazy="'/static/image/vipMarketing/2_title_m_bg.png'" class='brief-bg__img1 fadeInUp' :alt="item.detail">
        <h2 class='item-detail__title'>{{item.title}}</h2>
        <p class='item-detail__detail'>{{item.detail}}</p>
        <img v-lazy="item.img" class='brief-bg__img2 fadeInUp' :alt="item.detail">
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default: () => ({
                    title: '邀请奖励',
                    detail: '邀请新会员注册，邀请人可获得积分、余额或优惠券多种形式奖励，老用户为获得优惠礼包积极邀请好友，低成本拉新同时激发老用户活跃。',
                    img: '/static/image/vipMarketing/2_1_m_img.png'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .item-detail {
        width: 100%;
        height: fit-content;
        min-height: 814px;
        background: #fff;
        position: relative;
        overflow: hidden;
        .brief-bg__img1 {
            position: absolute;
            width: 140px;
            top: 0;
            left: 30px;
        }
        .brief-bg__img2 {
            width: 544px;
            display: block;
            margin: 0 auto 10px;
        }
        .item-detail__title{
            width: 100%;
            height:32px;
            font-size: 32px;
            line-height: 32px;
            color:#5d6494;
            box-sizing: border-box;
            padding: 0 55px;
            margin:50px 0 0;
        }
        .item-detail__detail{
            width: 100%;
            height:fit-content;
            font-size: 24px;
            line-height: 44px;
             color:#7d88a2;
            box-sizing: border-box;
            padding: 0 44px;
            margin:24px 0 0;
        }
    }
</style>