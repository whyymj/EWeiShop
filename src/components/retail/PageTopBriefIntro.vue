<template>
    <div class='brief-bg'>
        <div class='brief-bg__word'>
            <h2>新零售解决方案</h2>
            <span>整合全渠道资源为您建立闭合的社交电商生态圈</span>
        </div>
        <img src="@/assets/image/new-retail/banner_img.png" class='brief-bg__img' alt="">
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
        background: linear-gradient(45deg,#008aff, #1790ff);
        >.brief-bg__word {
            position: absolute;
            width: 340px;
            left: 40px;
            top: 112px;
            color: #fff;
            overflow: hidden;
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
            width: 305px;
            position: absolute;
            top: 60px;
            right: 32px;
        }
    }
</style>