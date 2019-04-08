<template>
    <div class='brief-bg'>
        <div class='brief-bg__word'>
            <h2 class='fadeInUp'>分销解决方案</h2>
            <span class='fadeInUp'>帮助您建立去中心化的电商体系快速引爆线上流量</span>
        </div>
        <img v-lazy="'/static/image/distribution_scheme/banner_img.png'" class='brief-bg__img fadeInUp' alt="整合全渠道资源为您建立闭合的社交电商生态圈">
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
        overflow: hidden;
        >.brief-bg__word {
            position: absolute;
            width: 340px;
            left: 40px;
            top: 112px;
            color: #fff;
            // overflow: hidden;
            >h2 {
                font-weight: 500;
                font-size: 36px;
                color: #fff;
                margin-bottom: 40px;
                 line-height: 36px;
            }
            >span {
                font-size: 24px;
                color: rgba(255, 255, 255, 0.8);
                line-height: 42px;
            }
        }
        >.brief-bg__img {
            width: 305px;
            position: absolute;
            top: 70px;
            right: 34px;
        }
    }
</style>