<template>
    <div class='brief-bg'>
        <div class='brief-bg__word'>
            <h2 class='fadeInUp'>新零售解决方案</h2>
            <span class='fadeInUp'>打通线下和线上<br/>重构商城和消费者的联系</span>
        </div>
        <img v-lazy='"/static/image/new-retail/banner_img.png"' class='brief-bg__img fadeInUp' alt="新零售解决方案_整合全渠道资源为您建立闭合的社交电商生态圈">
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
        background: linear-gradient(45deg, #008aff, #1790ff);
        overflow: hidden;
        >.brief-bg__word {
            position: absolute;
            width: 340px;
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
            width: 305px;
            position: absolute;
            top: 60px;
            right: 32px;
        }
    }
</style>