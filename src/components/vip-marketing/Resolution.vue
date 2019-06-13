<template>
    <div class='resolution'>
        <page-info theme='会员营销多样玩法' detail='' :themeStyle='{color:"#3b426b"}'>
            <ul class='resolution-list'>
                <li class='resolution-list__item' v-for='(item,index) in list' :key='index'>
                    <img class='resolution-list__item__icon' v-lazy="item.img" :alt="item.detail">
                    <h6 class='resolution-list__item__title'>{{item.title}}</h6>
                    <span class='resolution-list__item__detail' v-html='item.detail'></span>
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
                list: [{
                    img: '/static/image/vipMarketing/1_1_m_pic.png',
                    title: '邀请奖励',
                    detail: '老客带新'
                }, {
                    img: '/static/image/vipMarketing/1_1_m_pic.png',
                    title: '新人礼',
                    detail: '高效拉新'
                }, {
                    img: '/static/image/vipMarketing/1_1_m_pic.png',
                    title: '消费奖励',
                    detail: '促进活跃'
                }, {
                    img: '/static/image/vipMarketing/1_1_m_pic.png',
                    title: '充值奖励',
                    detail: '提升复购'
                }, ]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .resolution {
        background: #f5f8ff;
        width: 100%;
        .resolution-list {
            width: 100%;
            margin: 70px 0 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            >.resolution-list__item {
                width: 326px;
                height: 308px;
                margin: 0 9px 0;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                >.resolution-list__item__icon {
                    width: 160px;
                    height: 160px;
                    margin: 0 0 16px;
                }
                >.resolution-list__item__title {
                    width: 100%;
                    font-size: 28px;
                    text-align: center;
                    color: #3b426b;
                    line-height: 28px;
                    margin: 0 0 5px;
                    font-weight: 500;
                }
                >.resolution-list__item__detail {
                    width: 100%;
                    font-size: 24px;
                    text-align: center;
                    color: #7b88a2;
                    line-height: 38px;
                    margin: 0 0 28px;
                }
            }
        }
    }
</style>