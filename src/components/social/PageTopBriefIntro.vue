<template>
    <div class='brief-bg'>
        <div class='brief-bg__word'>
            <h2 class='fadeInUp'>社交电商解决方案</h2>
            <span class='fadeInUp'>帮助您建立去中心化的电商体系<br/>快速引爆线上流量</span>
        </div>
        <img v-lazy='"/static/image/social_bussiness/banner-img.png"' class='brief-bg__img fadeInUp' alt="">
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
        background: #5060e6;
        >.brief-bg__word {
            position: absolute;
            width: 360px;
            left: 40px;
            top: 112px;
            color: #fff;
            // overflow: hidden;
            >h2 {
                font-weight: 600;
                font-size: 36px;
                color: #fff;
                 line-height: 36px;
                margin-bottom: 40px;
            }
            >span {
                font-size: 24px;
                color: rgba(255, 255, 255, 0.8);
                line-height: 42px;
            }
        }
        >.brief-bg__img {
            width: 310px;
            position: absolute;
            top: 53px;
            right: 34px;
        }
    }
</style>