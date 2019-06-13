<template>
    <div class='brief-bg'>
        <div class='brief-bg__word'>
            <h2 class='fadeInUp'>会员营销</h2>
            <span class='fadeInUp'>四大会员营销奖励功能，助力新老客户持续吸引，提升商城成交转化。</span>
        </div>
        <img v-lazy="'/static/image/vipMarketing/banner_img.jpg'" class='brief-bg__img fadeInUp' alt="产品中心-店铺装修_店铺装修像搭积木一样简单，即刻拥有设计师般专业的商城页面">
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
        background: linear-gradient(to right, #f84753,#fc5954, #ff6b5c);
        overflow: hidden;
        >.brief-bg__word {
            position: absolute;
            width: 320px;
            left: 40px;
            top: 112px;
            color: #fff;
            // overflow: hidden;
            >h2 {
                 line-height: 36px;
                font-weight: 600;
                font-size: 36px;
                color: #fff;
                margin-bottom: 40px;
            }
            >span {
                font-size: 24px;
                color: rgba(255, 255, 255, 0.8);
                line-height: 42px;
            }
        }
        >.brief-bg__img {
            width: 350px;
            position: absolute;
            top: 29px;
            right: 0;
        }
    }
</style>