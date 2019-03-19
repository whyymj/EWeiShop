<template>
    <div class='brief-bg'>
        <img class='brief-bg__img' v-lazy="'/static/image/about_us/banner350.jpg'" alt="青岛易联互动网络科技有限公司">
        <div class="brief-bg__word">
            <h2 class='fadeInUp'>青岛易联互动网络科技有限公司</h2>
            <p class='fadeInUp'>
                <span>青岛易联互动网络科技有限公司成立于2015年，公司位于CBD核心商业区,产品研发实力雄厚。</span>
                <span>我们重视每一个产品、每一项服务、每一位客户，无论何时我们都以工匠精神打磨产品。公司经过3年多移动电商领域发展，已为超过6万服务商用户提供电商服务，累计创造收益超过亿元。</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang='scss'>
    .brief-bg {
        width: 100%;
        height: 652px;
        position: relative;
        background: #fafafa;
        >.brief-bg__word {
            position: absolute;
            width: 670px;
            height: 423px;
            left: 0;
            right: 0;
            margin: auto;
            bottom: 0;
            background: #fff;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
            >h2 {
                position: absolute;
                font-weight: 500;
                font-size: 36px;
                line-height: 36px;
                color: #fb6638;
                top: 60px;
                text-align: center;
                width: 100%;
            }
            >p {
                position: absolute;
                top: 135px;
                width: 580px;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                overflow: auto;
                >span {
                    display: inline-block;
                    font-size: 23px;
                    color: rgba(255, 255, 255, 0.8);
                    line-height: 40px;
                    color: #7b88a2;
                    margin-bottom: 10px;
                }
            }
        }
        >.brief-bg__img {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
</style>