<template>
    <div class='group-buy'>
        <!-- 产品中心-拼团 -->
        <page-brief></page-brief>
        <!-- 增加销量加快资金回流 -->
        <reflow></reflow>
        <!-- 社交分享传播，提升商城影响力 -->
        <share></share>
        <lazy-component>
            <!-- 唤醒沉睡会员促活商城 -->
            <wake></wake>
            <!-- 拼团页面展示 -->
            <show :bg-color='bgColor' :img-list='imgList' :pagination-color='paginationColor' theme='拼团页面展示'></show>
            <!-- EWEISHOP拼团的特色 -->
            <character></character>
            <!-- 解决三大拼团活动通痛点 -->
            <painer></painer>
        </lazy-component>
    </div>
</template>

<script>
    import pageBrief from '../components/group-buy/PageTopBriefIntro'
    import reflow from '../components/group-buy/Reflow.vue'
    import share from '../components/group-buy/Share.vue'
    import wake from '../components/group-buy/Wake.vue'
    import show from '../components/renovation/Show.vue'
    import character from '../components/group-buy/Character.vue'
    import painer from '../components/group-buy/Painer.vue'
    export default {
        metaInfo: {
            title: '产品中心_拼团_社交电商营销利器_降低库存回笼资金', // set a title
            meta: [{ // set meta
                name: 'keywords',
                content: '新零售，社交电商，分销商城，EWEISHOP，微信商城，微信小程序，微信小程序商城，微信商城管理，三级分销，千人千面'
            }, {
                name: "description",
                content: 'EWEISHOP新零售社交分销商城，一站式社交电商解决方案，多渠道营销，融合线上线下打造健康闭合的电商生态圈，新零售电商'
            }]
        },
        components: {
            pageBrief,
            reflow,
            share,
            wake,
            show,
            character,
            painer
        },
        data() {
            return {
                bgColor: '#fafafa',
                imgList: [{
                    img: '/static/image/assemble/group1.jpg',
                    alt: '拼团商品详情',
                    title: '拼团支付成功',
                }, {
                    img: '/static/image/assemble/group2.jpg',
                    alt: '拼团支付成功',
                    title: '拼团商品列表',
                }, {
                    img: '/static/image/assemble/group3.jpg',
                    alt: '拼团商品列表',
                    title: '拼团商品详情',
                }],
                paginationColor: '#f15f51'
            }
        },
    }
</script>

<style scoped lang='scss'>
    .group-buy {
        width: 100%;
    }
</style>