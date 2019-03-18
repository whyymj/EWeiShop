<template>
    <div class='distribute-model'>
        <page-info theme='社交电商多样化业务场景' detail='您的一站式电商营销解决方案' :detail-style='detailStyle'></page-info>
        <ul class='distribute-model__list'>
            <li class='distribute-model__list__item' v-for='(item,index) in list' :key='index'>
                <img v-lazy="item.img" :alt="item.detail">
                <h4>{{item.title}}</h4>
                <span>{{item.detail}}</span>
            </li>
        </ul>
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
                    color: '#9c9eae'
                },
                list: [{
                    img: '/static/image/social_bussiness/icon-1.png',
                    title: '会员群体',
                    detail: '了解会员洗好精准营销'
                }, {
                    img: '/static/image/social_bussiness/icon-2.png',
                    title: '营销活动',
                    detail: '多种营销玩法灵活销货'
                }, {
                    img: '/static/image/social_bussiness/icon-3.png',
                    title: '数据统计',
                    detail: '掌握数据轻松运营推广'
                }, {
                    img: '/static/image/social_bussiness/icon-4.png',
                    title: '裂变分享',
                    detail: '快速吸粉挖掘潜在会员'
                }]
            }
        },
    }
</script>

<style lang='scss' scoped>
    .distribute-model {
        width: 100%;
        background: #fafafa;
        >.distribute-model__list {
            width: 100%;
            overflow: hidden;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            padding: 0 0 46px 40px;
            margin-top: 50px;
            >.distribute-model__list__item {
                width: 323px;
                height: 284px;
                background: #fff;
                border-radius: 10px;
                position: relative;
                margin:0 24px 24px 0;
                >img {
                    position: absolute;
                    top: 40px;
                    left: 0;
                    right:0;
                    margin: auto;
                    width: 88px;
                    height: 88px;
                }
                >h4,
                >span {
                    position: absolute;
                    width: 100%;
                    text-align: center;
                    font-weight: 500;
                    left: 0;
                }
                >h4 {
                    color: #3b426b;
                    top:168px;
                    font-size: 26px;
                    line-height: 26px;
                }
                >span {
                    color: #7e8da9;
                    top:221px;
                    font-size: 22px;
                    line-height: 22px;
                }
            }
        }
    }
</style>