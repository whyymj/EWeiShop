<template>
    <div class='data-mining'>
        <ul class='data-mining__slider'>
            <li v-for='(item,index) in list' :key='index' class='data-mining__slider__item'>
                <img v-lazy="item.img" alt="了解更多" class='data-mining__slider__item__icon' :class='"item"+index'>
                <span class='data-mining__slider__item__theme'>{{item.theme}}</span>
                <span class='data-mining__slider__item__detail' v-html='item.detail'></span>
                <a class='data-mining__know-more' @click='toUrl(item.url)'>了解更多</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [{
                        img: '/static/image/index/fangan1.png',
                        theme: '新零售解决方案',
                        detail: "整合多渠道资源，无缝对接<br/>线上商城与线下门店",
                        url: '/new-retail'
                    },
                    {
                        img: '/static/image/index/fangan2.png',
                        theme: '社交电商解决方案',
                        detail: "采取用户裂变模式，建立电商矩阵社群挖掘潜在用户",
                        url: '/social-contact'
                    }, {
                        img: '/static/image/index/fangan3.png',
                        theme: '分销解决方案',
                        detail: "建立完善的分销推广体系，打造超人气分销商城",
                        url: '/distribution'
                    }
                ]
            }
        },
        methods: {
            toUrl(path) {
                this.$router.push({
                    path
                })
            }
        }
    }
</script>

<style scoped lang='scss'>
    .data-mining {
        width: 100%;
        overflow: auto;
        margin: 45px 0 0;
        -webkit-overflow-scrolling: touch;
        >.data-mining__slider {
            margin: 40px auto 70px;
            width: 1040px;
            height: 306px;
            display: flex;
            padding-left: 40px;
            >.data-mining__slider__item {
                height: 100%;
                width: 320px;
                border-radius: 10px;
                background: #fff;
                flex-wrap: nowrap;
                margin: 0 20px 0 0;
                position: relative;
                box-shadow: 0 6px 40px rgba(230, 233, 246, .6);
                >.data-mining__slider__item__icon {
                    position: absolute;
                    width: 90px;
                    top: -34px;
                    left: 0;
                    right: 0;
                    margin: auto;
                }
                >.data-mining__slider__item__icon.item0 {
                    width: 76px;
                }
                >.data-mining__slider__item__theme {
                    display: block;
                    position: absolute;
                    left: 50%;
                    overflow: hidden;
                    padding: 0 10px;
                    white-space: nowrap;
                    transform: translate(-50%, 0);
                    text-align: center;
                    top: 105px;
                    font-size: 26px;
                    line-height: 30px;
                    color: #303548;
                    font-weight: 600;
                    &::before {
                        content: '';
                        position: absolute;
                        z-index: -1;
                        width: 100%;
                        height: 18px;
                        left: -1px;
                        bottom: -1px;
                        background: #ffdccc;
                    }
                }
                >.data-mining__slider__item__detail {
                    position: absolute;
                    width: 100%;
                    left: 0;
                    right: 0;
                    margin: auto;
                    line-height: 37px;
                    font-size: 24px;
                    color: #4d4a69;
                    text-align: center;
                    top: 154px;
                    transform: scale(.9);
                }
                >.data-mining__know-more {
                    position: absolute;
                    width: 290px;
                    height: 60px;
                    box-sizing: border-box;
                    left: 0;
                    right: 0;
                    margin: auto;
                    bottom: 0;
                    border-top: 1px solid #eee;
                    /*no*/
                    color: #f8572b;
                    text-align: center;
                    line-height: 60px;
                    font-size: 24px;
                    transform: scale(.85);
                    text-decoration: none;
                }
            }
        }
    }
</style>