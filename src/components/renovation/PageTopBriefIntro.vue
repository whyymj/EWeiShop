<template>
    <div class='brief-bg'>
        <div class='brief-bg__word'>
            <h2 class='fadeInUp'>产品中心-店铺装修</h2>
            <span class='fadeInUp'>店铺装修像搭积木一样简单，即刻拥有设计师般专业的商城页面</span>
        </div>
        <img v-lazy="'/static/image/renovation/decoration-ban.png'" class='brief-bg__img fadeInUp' alt="产品中心-店铺装修_店铺装修像搭积木一样简单，即刻拥有设计师般专业的商城页面">
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
        background: #49daae;
        overflow: hidden;
        >.brief-bg__word {
            position: absolute;
            width: 360px;
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
            width: 258px;
            position: absolute;
            top: 41px;
            right: 40px;
        }
    }
</style>