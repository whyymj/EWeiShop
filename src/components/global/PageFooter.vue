<template>
    <footer class='navigator' id='navigator'>
        <div class="navigator__logo">
            <img v-lazy="'/static/image/global/nav_logo.png'" class='navigator__logo__img' alt="logo">
        </div>
        <div class="navigator__body" @click='routeTo'>
            <h3>解决方案</h3>
            <ul class='navigator__body__solution'>
                <li data-nav='/new-retail'>新零售解决方案</li>
                <li data-nav='/social-contact'>社交电商解决方案</li>
                <li data-nav='/distribution'>分销解决方案</li>
            </ul>
            <h3>新闻中心</h3>
            <ul class='navigator__body__news-center'>
                <li data-nav='/new-prod'>产品发布</li>
                <li data-nav='/new-info'>最新动态</li>
                <li data-nav='/new-log'>更新日志</li>
            </ul>
            <h3>服务支持</h3>
            <ul class='navigator__body__servicen'>
                <li data-nav='/service'>帮助中心</li>
                <li data-nav='/aboutus'>关于我们</li>
                <li @click='toRRSC'>人人商城</li>
            </ul>
        </div>
        <div class="navigator__statement">
            <span>青岛易联互动网络科技有限公司版权所有</span>
            <span>©2016-2018鲁ICP备18044507号</span>
        </div> 
    </footer>
</template>

<script>
    export default {
        methods: {
            curPage(path) {
                return path == this.$route.path;
            },
            toRRSC() {
                window.location.href = 'https://m.we7shop.com/index.html'
            },
            routeTo(page) {
                /**
                 * 路由跳转事件
                 */
                if (page.target.dataset && page.target.dataset.nav) {
                    let nav = page.target.dataset.nav;
                    if (nav != this.$route.path) {
                        this.$router.push({
                            path: nav
                        })
                    }
                }
            }
        }
    }
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
        height: 680px;
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
    }
</style>