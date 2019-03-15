<template>
    <div class='character'>
        <img class='character__bg' v-lazy="'/static/image/distribution_scheme/daili_background.png'" alt="">
        <page-info theme='EWEISHOP分销的特色' :theme-style='detailStyle' detail='轻松带领成千上万粉丝为您销售商品' :detail-style='detailStyle'>
            <ul class='character__list'>
                <li class='character__list__item' v-for='(item,index) in list' :key='index'>
                    <img class='character__list__item__icon' v-lazy="item.img" :alt="item.detail">
                    <span class='character__list__item__detail' v-html='item.detail'></span>
                </li>
            </ul>
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
                detailStyle: {
                    color: '#fff'
                },
                list: [{
                    img: '/static/image/distribution_scheme/character-1.png',
                    detail: '快速拓客吸粉<br/>轻松卖货无压力'
                }, {
                    img: '/static/image/distribution_scheme/character-2.png',
                    detail: '疯狂社交传播<br/>交易倍增提升影响'
                }, {
                    img: '/static/image/distribution_scheme/character-3.png',
                    detail: '分销商拥挤机制提高推广积极性'
                }, {
                    img: '/static/image/distribution_scheme/character-4.png',
                    detail: '投入成本少<br/>宣传力度广'
                }, {
                    img: '/static/image/distribution_scheme/character-5.png',
                    detail: '建立庞大销售网络快速销货'
                }]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .character {
        width: 100%;
        position: relative;
        height: 838px;
        >.character__bg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
        .character__list {
            width: 705px;
            margin: 50px 0 0 30px;
            text-align: center;
            box-sizing: border-box;
            >.character__list__item {
                display: inline-block;
                overflow: hidden;
                margin: 0 18px 8px 0;
                width: 211px;
                height: 255px;
                background: #fff;
                position: relative;
                border-radius: 5px;
                >.character__list__item__icon {
                    position: absolute;
                    width: 124px;
                    height: 124px;
                    top: 29px;
                    left: 0;
                    right: 0;
                    margin: auto;
                }
                >.character__list__item__detail {
                    position: absolute;
                    top: 150px;
                    width: 100%;
                    text-align: center;
                    font-size: 24px;
                    line-height: 39px;
                    left: 0;
                    right: 0;
                    margin: auto;
                    transform: scale(0.9);
                }
            }
        }
    }
</style>