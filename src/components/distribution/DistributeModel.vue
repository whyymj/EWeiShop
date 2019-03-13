<template>
    <div class='distribute-model'>
        <page-info theme='出色的三级分销模式' detail='多触点推广，全网裂变式传播的营销体系' :detail-style='detailStyle'></page-info>
        <ul class='distribute-model__list'>
            <li class='distribute-model__list__item' v-for='(item,index) in list' :key='index'>
                <img :src="item.img" :alt="item.detail">
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
                    color: '#5d6494'
                },
                list: [{
                    img: require('../../assets/image/distribution_scheme/bg_img_1.png'),
                    title: '全网裂变式传播',
                    detail: '迅速提升品牌影响力'
                }, {
                    img: require('../../assets/image/distribution_scheme/bg_img_2.png'),
                    title: '佣金奖励机制',
                    detail: '提升分销商宣传积极性'
                }, {
                    img: require('../../assets/image/distribution_scheme/bg_img_3.png'),
                    title: '灵活分销管理',
                    detail: '轻松管理成千上万的代理商'
                }, {
                    img: require('../../assets/image/distribution_scheme/bg_img_4.png'),
                    title: '强大的分销体系',
                    detail: '扩大影响力低成本快速销货'
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
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
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