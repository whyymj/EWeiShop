<template>
    <div class='character'>
        <img class='character__bg' v-lazy='"/static/image/spike/character-bg.png"' alt="">
        <page-info theme='EWEISHOP 秒杀的特色' :theme-style='themeStyle' detail=''>
            <div class='character-list-box'>
                <ul class='character-list-box__list'>
                    <li class='character-list-box__list__item' v-for='(item,index) in list' :key='index'>
                        <img v-lazy="item.img" :alt="item.detail">
                        <span v-html='item.detail'></span>
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
                themeStyle: {
                    color: '#fff'
                },
                list: [{
                    img: '/static/image/spike/character1.png',
                    detail: '秒杀活动<br/>所见即所得'
                }, {
                    img: '/static/image/spike/character2.png',
                    detail: '秒杀与分销结合<br/>传播力度强'
                }, {
                    img: '/static/image/spike/character3.png',
                    detail: '分时段秒杀活动<br/>便捷高效'
                }, {
                    img: '/static/image/spike/character4.png',
                    detail: '秒杀数据全<br/>便于制定营销方案'
                }, ]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .character {
        width: 100%;
        position: relative;
        height: 565px;
        >.character__bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .character-list-box {
            width: 100%;
            overflow-x: auto;
            margin-top:60px;
             -webkit-overflow-scrolling: touch;
            >.character-list-box__list {
                display: flex;
                justify-content: center;
                width: fit-content;
                padding: 0 12px 0 30px;
                >.character-list-box__list__item {
                    height: 318px;
                    width: 270px;
                    flex-shrink: 0;
                    overflow: hidden;
                    background: rgba(255, 255, 255, .8);
                    border-radius: 6px;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin: 0 18px 0 0;
                    >img {
                        width: 130px;
                        height: 130px;
                        margin: 40px 0 24px;
                    }
                    >span {
                        width: 100%;
                        text-align: center;
                        font-size: 24px;
                        line-height: 38px;
                        color: #5d6494;
                        height: fit-content;
                        position: relative;
                        &:before {
                            position: absolute;
                            content: '';
                            width: 96px;
                            height: 4px;
                            background: #ff546f;
                            border-radius: 2px;
                            top: -24px;
                            left:0;right:0;margin: auto;
                        }
                    }
                }
            }
        }
    }
</style>