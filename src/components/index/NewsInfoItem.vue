<template>
    <ul class='news-info'>
        <li class='news-info__item' v-for='(item,index) in newsList' :key='index'>
            <img v-lazy="item.img" alt="">
            <h3>{{item.title}}</h3>
            <p class="news-info__item__keywords">
                <span class="news-info__item__keywords__word" v-for='(val,key) in item.keyWords' :key='key'>{{val}}</span>
                <span class="news-info__item__keywords__time">{{item.time}}</span>
            </p>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                newsList: [{
                    img: '/static/image/index/index-p_03.png',
                    title: '2018年即将逝去,期待新年再创奇迹,你好,2019',
                    keyWords: ['最新动态'],
                    time: '01-24'
                }]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .news-info {
        width: 100%;
        overflow: hidden;
        margin-top: 30px;
        >.news-info__item {
            width: 670px;
            margin: auto;
            box-sizing: border-box;
            height: 185px;
            border-bottom: 1px solid #eee;
            position: relative;
            >img {
                position: absolute;
                width: 240px;
                border-radius: 4px;
                top: 50%;
                left: 0;
                transform: translate(0, -50%);
            }
            >h3 {
                position: absolute;
                left: 276px;
                right: 0;
                top: 20px;
                font-size: 27px;
                line-height: 43px;
                color:#2a2a50;
                font-weight: 400;
            }
            >.news-info__item__keywords,
            >.news-info__item__keywords__time {
                position: absolute;
                bottom: 28px;
                left: 270px;
                right: 0;
                height: 28px;
                >span {
                    float: left;
                    height: 36px;
                    border-radius: 18px;
                    background: #f6f6f8;
                    font-size: 16px;
                    line-height: 40px;
                    text-align: center;
                    padding: 0 18px;
                    color: #758293; 
                    transform: scale(0.9);
                }
                >.news-info__item__keywords__time {
                    float: right;
                    background: #fff;
                    padding: 0;
                }
            }
        }
    }
</style>