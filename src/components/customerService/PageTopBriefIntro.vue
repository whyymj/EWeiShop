<template>
    <div class='brief-bg'>
        <img class='brief__bgImg' v-lazy="'/static/image/customerService/banner-bg.png'" alt="">
        <div class='brief-bg__word'>
            <p class='fadeInUp'>在线客服系统</p>
            <span class='fadeInUp'>加强商家与用户之间的沟通，是网络营销最重要的工具</span>
        </div>
        <img v-lazy="'/static/image/customerService/banner-img.png'" class='brief-bg__img fadeInUp' alt="">
    </div>
</template>

<script>
    export default {
        props: {
            theme: {
                type: String,
                default: '新零售社交分销商城'
            },
            detail: {
                type: String,
                default: '新零售社交分销商城'
            }
        }
    }
</script>

<style scoped lang='scss'>
    .brief-bg {
        width: 100%;
        height: 350px;
        position: relative;
        overflow: hidden;
        >.brief__bgImg{
            width: 100%;
        }
        >.brief-bg__word {
            position: absolute;
            width: 49%;
            left: 40px;
            top: 50%;
            color: #fff;
            margin-top: -83px;
            padding-top: 10px;
            // overflow: hidden;
            >p {
                font-weight: 600;
                font-size: 1.125rem;
                color: #fff;
                margin-bottom: 1.25rem;
            }
            >span {
                font-size:24px;
                color: rgba(255, 255, 255, 0.8);
                line-height: 1.3125rem;
            }
        }
        >.brief-bg__img {
            width: 246px;
            position: absolute;
            top: 50%;
            right: 45px;
            margin-top: -124px;
        }
    }
</style>