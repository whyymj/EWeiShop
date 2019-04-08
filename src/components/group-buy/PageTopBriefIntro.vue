<template>
    <div class='brief-bg'>
        <div class='brief-bg__word'>
            <h2 class='fadeInUp'>产品中心-拼团</h2>
            <span class='fadeInUp'>社交电商时代营销利器，快速扩张，帮您降低库存回笼资金</span>
        </div>
        <img v-lazy="'/static/image/assemble/banner_img.png'" class='brief-bg__img fadeInUp' alt="产品中心-拼团_社交电商时代营销利器，快速扩张，帮您降低库存回笼资金">
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
        background: linear-gradient(90deg, #ff5870, #ff8b54);
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
            width: 246px;
            position: absolute;
            top: 27px;
            right: 56px;
        }
    }
</style>