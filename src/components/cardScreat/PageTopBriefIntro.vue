<template>
    <div class='brief-bg'>
        <div class='brief-bg__word'>
            <h2 class='fadeInUp'>电子卡密</h2>
            <span class='fadeInUp'>提供虚拟商品的发售服务，&#10;添加卡密数据，发售卡密商品</span>
        </div>
        <img v-lazy='"/static/image/cardServe/product-card.png"' class='brief-bg__img fadeInUp' alt="">
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
        background: linear-gradient(-90deg,#ff5d5c,#ff825c, );
        >.brief-bg__word {
            position: absolute;
            width: 340px;
            left: 40px;
            top: 90px;
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
                white-space:pre;
            }
        }
        >.brief-bg__img {
            width: 300px;
            height: 215px;
            position: absolute;
            top: 68px;
            right: 70px;
        }
    }
</style>