<template>
    <div class='data-mining'>
        <ul class='data-mining__slider'>
            <li v-for='(item,index) in list' :key='index' class='data-mining__slider__item'>
                <img :src="item.img" alt="" class='data-mining__slider__item__icon'>
                <span class='data-mining__slider__item__theme'>{{item.theme}}</span>
                <span class='data-mining__slider__item__detail'>{{item.detail}}</span>
                <a class='data-mining__know-more'>了解更多</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [{
                        img: require('@/assets/image/index/fangan1.png'),
                        theme: '新零售解决方案',
                        detail: "整合多渠道资源，无缝对接线上商城与线下门店"
                    },
                    {
                        img: require('@/assets/image/index/fangan2.png'),
                        theme: '社交电商解决方案',
                        detail: "整合多渠道资源，无缝对接线上商城与线下门店"
                    }, {
                        img: require('@/assets/image/index/fangan3.png'),
                        theme: '分销解决方案',
                        detail: "整合多渠道资源，无缝对接线上商城与线下门店"
                    }
                ]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .data-mining {
        width: 100%;
        overflow: auto;
        margin: 90px 0 0;
        >.data-mining__slider {
            margin: 40px auto 70px;
            width: 1040px;
            height: 314px;
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
                box-shadow: 0 6px 40px 66% #e6e9f6;
                >.data-mining__slider__item__icon {
                    position: absolute;
                    width: 90px;
                    height: 105px;
                    top: -40px;
                    left: 0;
                    right: 0;
                    margin: auto;
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
                    font-size: 25px;
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
                        bottom: 0;
                        background: #ffdccc;
                    }
                }
                >.data-mining__slider__item__detail {
                    position: absolute;
                    width: 250px;
                    left: 0;
                    right: 0;
                    margin: auto;
                    line-height: 37px;
                    font-size: 20px;
                    color: #4d4a69;
                    text-align: center;
                    top: 160px;
                }
                >.data-mining__know-more {
                    position: absolute;
                    width: 280px;
                    height: 60px;
                    box-sizing: border-box;
                    left: 0;
                    right: 0;
                    margin: auto;
                    bottom: 0;
                    border-top: 1px solid #eee;
                    color: #f8572b;
                    text-align: center;
                    line-height: 60px;
                }
            }
        }
    }
</style>