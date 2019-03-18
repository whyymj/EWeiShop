<template>
    <div class='navigator'>
        <img v-lazy="'/static/image/global/nav_logo.png'" class='navigator__logo' alt="logo">
        <img v-lazy="'/static/image/global/nav_btn.png'" class='navigator__btn' @click='showNav' alt="close">
        <Popup position="right" v-model="show">
            <nav class='nav' @click='routeTo'>
                <div class="nav__logo">
                    <img class='nav__logo__logo' v-lazy="logo" alt="eweishop logo">
                    <img class='nav__logo__close' v-lazy="close" alt="close navigator" @click='show=false'>
                </div>
                <h2 class='nav__title' :class='{"curPage":curPage("/")}' data-nav='/'>首页</h2>
                <collapse v-model="activeNames" @change='change'>
                    <collapse-item name="1">
                        <img v-lazy="arrowDown" class='right-icon' :class='{"right-icon--open":activeNames.indexOf("1")>-1}' slot='right-icon' alt="解决方案"> <span class='sub-title' slot='title'>解决方案</span>
                        <ul class='programs'>
                            <li data-nav='/new-retail' :class='{"curPage":curPage("/new-retail")}'>新零售解决方案</li>
                            <li data-nav='/social-contact' :class='{"curPage":curPage("/social-contact")}'>社交电商解决方案</li>
                            <li data-nav='/distribution' :class='{"curPage":curPage("/distribution")}'>分销解决方案</li>
                        </ul>
                    </collapse-item>
                    <collapse-item name="2">
                        <img v-lazy="arrowDown" class='right-icon' :class='{"right-icon--open":activeNames.indexOf("2")>-1}' slot='right-icon' alt="产品中心"> <span class='sub-title' slot='title'>产品中心</span>
                        <ul class='programs'>
                            <li data-nav='/renovation' :class='{"curPage":curPage("/renovation")}'>店铺装修</li>
                            <li data-nav='/groupBuy' :class='{"curPage":curPage("/groupBuy")}'>拼团</li>
                            <li data-nav='/spike' :class='{"curPage":curPage("/spike")}'>秒杀</li>
                        </ul>
                    </collapse-item>
                    <!-- <collapse-item name="3">
                        <img v-lazy="arrowDown" class='right-icon' :class='{"right-icon--open":activeNames.indexOf("3")>-1}' slot='right-icon' alt="新闻中心"> <span class='sub-title' slot='title'>新闻中心</span>
                        <ul class='programs'>
                            <li data-nav='/news/prod'>产品发布</li>
                            <li data-nav='/news/info'>最新动态</li>
                            <li data-nav='/news/log'>更新日志</li>
                        </ul>
                    </collapse-item> -->
                </collapse>
                <h2 class='nav__title nav__title--help'><router-link data-nav='/iframe/help'  :class='{"curPage":curPage("/iframe/help")}' to='/iframe/help' tag='a'>帮助中心</router-link></h2>
                <h2 class='nav__title nav__title--about-us' data-nav='/aboutus' :class='{"curPage":curPage("/aboutus")}'>关于我们</h2>
            </nav>
        </Popup>
    </div>
</template>

<script>
    import {
        Popup,
        Collapse,
        CollapseItem
    } from 'vant';
    import {
        log
    } from 'util';
    export default {
        components: {
            Popup,
            Collapse,
            CollapseItem
        },
        data() {
            return {
                show: false,
                logo: '/static/image/global/nav_logo.png',
                close: '/static/image/global/x.png',
                arrowDown: '/static/image/global/arrow-down.png',
                activeNames: ['1', '2', '3']
            }
        },
        watch: {
            show() {
                this.$emit('toggleFooter', !this.show)
            }
        },
        methods: {
            curPage(path) {
                return path == this.$route.path;
            },
            showNav() {
                this.show = !this.show;
            },
            change(val) {
                this.activeNames = val;
            },
            routeTo(page) {
                /**
                 * 路由跳转事件
                 */
                if (page.target.dataset && page.target.dataset.nav) {
                    this.show = false;
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

<style scoped lang='scss'>
    .navigator {
        width: 100%;
        height: 88px;
        top: 0;
        position: absolute;
        z-index: 2000;
        background: #fff;
        border-bottom: 1px solid #eee;
        /*no*/
        .curPage {
            color: #fb6638!important;
        }
        >.navigator__logo {
            width: 255px;
            height: 100%;
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
        }
        >.navigator__btn {
            width: 48px;
            height: 48px;
            position: absolute;
            right: 24px;
            top: 0;
            bottom: 0;
            margin: auto;
        }
        .nav {
            width: 540px;
            height: 100%;
            background: #fff;
            >.nav__logo {
                width: 100%;
                box-sizing: border-box;
                border-bottom: 1px solid #eee;/*no*/
                height: 88px;
                position: relative;
                >img {
                    position: absolute;
                    top: 50%;
                    transform: translate(0, -50%);
                }
                >.nav__logo__logo {
                    width: 256px;
                    left: 36px;
                }
                >.nav__logo__close {
                    width: 48px;
                    height: 48px;
                    right: 24px;
                }
            }
            >.nav__title {
                font-size: 28px;
                line-height: 28px;
                margin: 28px 0 50px 0;
                box-sizing: border-box;
                padding: 0 0 0 36px;
                color: #3b426b;
                font-weight: 600;
                >a {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    color: #3b426b;
                    text-decoration: none;
                }
            }
            >.nav__title--help,
            >.nav__title--about-us {
                margin-top: 45px;
            }
            .sub-title {
                font-size: 28px;
                line-height: 28px;
                padding: 0 0 0 24px;
                color: #3b426b;
                font-weight: 600;
            }
            .right-icon {
                width: 27px;
                height: 28px;
                margin: 0 16px 0 0;
                transform: rotate(0);
                transition: all .3s;
            }
            .right-icon--open {
                transform: rotate(180deg);
            }
            .programs {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                box-sizing: border-box;
                padding: 22px 0 0 24px;
                >li {
                    width: 220px;
                    font-size: 24px;
                    line-height: 24px;
                    color: #7a7fa5;
                    margin: 0 20px 48px 0;
                    &:last-child {
                        margin: 0 20px 13px 0;
                    }
                }
            }
        }
    }
</style>