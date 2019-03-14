<template>
    <div class='data-visible'>
        <img class='data-visible__bg-img' v-lazy="'/static/image/index/data_bg_img.png'" alt="数据可视化展示,一目了然有利于您科学统计分析运筹帷幄">
        <page-info theme='数据可视化展示' detail='一目了然有利于您科学统计分析运筹帷幄' :theme-style='themeWhiteStyle' :detail-style='detailWhiteStyle'>
            <div class='slider-container'>
                <ul class='items-slider'>
                    <li v-for='(item,index) in itemList' :key='index'>
                        <img v-lazy="item.img" :alt="item.content">
                        <h6>{{item.title}}</h6>
                        <span>{{item.content}}</span>
                    </li>
                </ul>
            </div>
        </page-info>
    </div>
</template>

<script>
    import pageInfo from '../retail/PageMiddleInfo'
    export default {
        components: {
            pageInfo
        },
        data() {
            return {
                themeWhiteStyle: {
                    color: "#fff"
                },
                detailWhiteStyle: {
                    color: "#fff"
                },
                itemList: [{
                    img: '/static/image/index/data-1.png',
                    title: '交易数据',
                    content: '快速掌握商城用户的交易周期，为您提供一手商城交易数据支持'
                }, {
                    img: '/static/image/index/data-2.png',
                    title: '商品数据',
                    content: '智能商品数据监控，自动统计商品数据，为您提供精准可靠、有效的销售数据'
                }, {
                    img: '/static/image/index/data-3.png',
                    title: '会员数据',
                    content: '帮助您快速掌握商场用户的交易周期，深入洞察分析，为您提供一手商城交易数据支持'
                }, ]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .data-visible {
        position: relative;
        width: 100%;
        height: 895px;
        >.data-visible__bg-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .slider-container {
            width: 100%;
            overflow: auto;
            margin-top:50px;
            >.items-slider {
                width: 1880px;
                display: flex;
                flex-wrap: nowrap;
                padding: 0 0 0 40px;
                >li {
                    width: 600px;
                    height: 606px;
                    background: #fff;
                    border-radius: 10px;
                    margin: 0 20px 0 0;
                    position: relative;
                    >img {
                        position: absolute;
                        width: 496px;
                        top: 80px;
                        left: 0;
                        right: 0;
                        margin: auto;
                    }
                    >h6 {
                        position: absolute;
                        width: 100%;
                        text-align: center;
                        top: 422px;
                        font-size: 30px;
                        line-height: 30px;
                        color: #48546c;
                    }
                    >span {
                        position: absolute;
                        width: 490px;
                        left:0;right:0;
                        margin: auto;
                        top:480px;
                        font-size: 24px;
                        line-height: 38px;
                        color:#a5a8bb;
                    }
                }
            }
        }
    }
</style>