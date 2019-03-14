<template>
    <nav class='navigator'>
        <div class="navigator__logo">
            <img v-lazy="'/static/image/global/nav_logo.png'" class='navigator__logo__img' alt="">
        </div>
        <div class="navigator__body">
            <h3>解决方案</h3>
            <ul class='navigator__body__solution'>
                <li>新零售解决方案</li>
                <li>社交电商解决方案</li>
                <li>分销解决方案</li>
            </ul>
            <h3>新闻中心</h3>
            <ul class='navigator__body__news-center'>
                <li>产品发布</li>
                <li>最新动态</li>
                <li>更新日志</li>
            </ul>
            <h3>服务支持</h3>
            <ul class='navigator__body__servicen'>
                <li>帮助中心</li>
                <li>关于我们</li>
                <li>人人商城</li>
            </ul>
        </div>
        <div class="navigator__statement">
            <span>青岛易联互动网络科技有限公司版权所有</span>
            <span>©2016-2018鲁ICP备18044507号</span>
        </div>
        <div class="navigator__adv">
            <img v-lazy="'/static/image/index/phone_.png'" class='navigator__adv__phone' alt="">
            <span class='navigator__adv__callus'>联系我们 &nbsp; 免费试用</span>
        </div>
    </nav>
</template>

<script>
    export default {}
</script>

<style lang='scss' scoped>
    @keyframes blink {
        0% {
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            width: 600px;
            height: 600px;
            opacity: 0.2;
        }
    }
    .navigator {
        height: 780px;
        width: 100%;
        overflow: hidden;
        background: #1c1c24;
        position: relative;
        >.navigator__logo {
            width: 670px;
            margin: auto;
            height: 159px;
            position: relative;
            >.navigator__logo__img {
                width: 200px;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(0, -50%);
            }
        }
        >.navigator__body {
            width: 100%;
            box-sizing: border-box;
            padding-left: 84px;
            margin: auto;
            >h3 {
                color: rgba(255, 255, 255, 0.5);
                font-size: 24px;
                margin-bottom: 24px;
                line-height: 24px;
            }
            >ul {
                width: 100%;
                margin: 0 auto 60px;
                display: flex;
                >li {
                    margin: 0 38px 0 0;
                    font-size: 24px;
                    color: #888;
                    line-height: 24px;
                }
                >li:last-child {
                    margin: 0 0 0 0;
                }
            }
        }
        >.navigator__statement {
            width: 670px;
            margin: auto;
            height: 132px;
            box-sizing: border-box;
            border-top: 1px solid rgba(255, 255, 255, 0.1);/*no*/
            padding: 36px 0 0 0;
            >span {
                display: block;
                font-size: 20px;
                color: #3d404d;
                line-height: 32px;
                text-align: center;
            }
        }
        >.navigator__adv {
            height: 98px;
            width: 100%;
            position: absolute;
            overflow: hidden;
            bottom: 0;
            left: 0;
            background: linear-gradient(135deg, #ff6231, #ff3636);
            >.navigator__adv__phone {
                position: absolute;
                width: 40px;
                height: 40px;
                left: 140px;
                top: 0;
                bottom: 0;
                margin: auto;
            }
            >.navigator__adv__callus {
                line-height: 98px;
                text-align: center;
                width: 100%;
                height: 100%;
                float: left;
                font-size: 36px;
                color: #fff;
            }
            &:after {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                background: rgba(0, 0, 0, 0.1);
                width: 10px;
                height: 10px;
                border-radius: 50%;
                animation: blink 2s ease  infinite;
            }
        }
    }

</style>