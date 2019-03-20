<template>
    <div class='brief-bg'>
        <div class='brief-bg__word'>
            <h2 class='fadeInUp'>产品中心-秒杀</h2>
            <span class='fadeInUp'>营销必备力气，吸引新粉丝促活老用户，有效提升转化率</span>
        </div>
        <img v-lazy='"/static/image/spike/banner-img.png"' class='brief-bg__img fadeInUp' alt="">
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
        background: linear-gradient(-90deg,#ff5470, #ff5b5b);
        >.brief-bg__word {
            position: absolute;
            width: 340px;
            left: 40px;
            top: 112px;
            color: #fff;
            >h2 {
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
            width: 282px;
            position: absolute;
            top: 68px;
            right: 40px;
        }
    }
</style>