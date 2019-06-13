<template>
    <div class='reward-channel'>
        <h1><span>{{item.title}}</span></h1>
        <p class='detail'>{{item.detail}}</p>
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
    .reward-channel {
        width: 100%;
        height: fit-content;
        background: #fff;
        position: relative;
        overflow: hidden;
        >h1 {
            width: fit-content;
            height: 32px;
            font-size: 32px;
            line-height: 32px;
            color: #5d6494;
            text-align: center;
            box-sizing: border-box;
            position: relative;
            margin: 0 auto 32px;
            span{
                position: relative;
                z-index:1;
                padding: 0 15px;
            }
            &:before {
                position: absolute;
                content: '';
                width: 100%;
                height: 100%;
                top: 50%;
                left:0;
                background: linear-gradient(#fff,#ffe5e8);
            }
        }
        .detail {
            width: 100%;
            height: fit-content;
            font-size: 24px;
            line-height: 44px;
            color: #7d88a2;
            box-sizing: border-box;
            padding: 0 44px;
            margin: 24px 0 0;
            text-align: center;
        }
        .brief-bg__img2{
            width:634px;
            display: block;
            margin:0 auto 20px;
        }
    }
</style>