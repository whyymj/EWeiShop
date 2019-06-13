<template>
    <div class='vip-marketing'>
        <div class='firstScreen'>
            <pageBrief></pageBrief>
            <marketingMode></marketingMode>
        </div>
        <div class='secondScreen'>
            <div class='function-bg-title'>功能场景</div>
            <lazy-component v-for='(item,index) in items' :key='index'>
                <itemDetail :item='item'></itemDetail>
            </lazy-component>
        </div>
        <lazy-component>
            <div class='function-bg-title title2'>建立完善奖励通道 提升平台运营效率</div>
            <channel v-for='(item,index) in channels' :key='index' :item='item'></channel>
        </lazy-component>
    </div>
</template>

<script>
    import pageBrief from '../components/vip-marketing/PageTopBriefIntro';
    import marketingMode from '../components/vip-marketing/Resolution'
    import itemDetail from '../components/vip-marketing/Item-Detail'
    import channel from '../components/vip-marketing/RewardChannel'
    export default {
        metaInfo: {
            title: '产品中心_会员营销_四种营销奖励功能_助力用户持续吸引', // set a title
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
            marketingMode,
            itemDetail,
            channel
        },
        data() {
            return {
                items: [{
                    title: '邀请奖励',
                    detail: '邀请新会员注册，邀请人可获得积分、余额或优惠券多种形式奖励，老用户为获得优惠礼包积极邀请好友，低成本拉新同时激发老用户活跃。',
                    img: '/static/image/vipMarketing/2_1_m_img.png'
                }, {
                    title: '新人礼',
                    detail: '对新注册会员进行奖励，提升新用户注册量，激活率，关注度。利用优惠券等礼包引导用户转化，降低平均用户获取成本。',
                    img: '/static/image/vipMarketing/2_2_m_img.png'
                }, {
                    title: '消费奖励',
                    detail: '用户购买消费满足一定额度或一定次数时奖励积分、余额及优惠券，提高用户活跃促进转化，增加营收。',
                    img: '/static/image/vipMarketing/2_3_m_img.png'
                }, {
                    title: '充值奖励',
                    detail: '对充值会员进行奖励，赠送积分、余额、优惠券，提升会员充值积极性，有效提高客户忠诚度，拉升会员复购率。',
                    img: '/static/image/vipMarketing/2_4_m_img.png'
                }, ],
                channels: [{
                    title: '四大奖励功能助力营销升级',
                    detail: '邀请奖励，新人礼，消费奖励，充值奖励，满足商城不同运营需求，助力商城拉新、促活、消费、留存、充值。',
                    img: '/static/image/vipMarketing/3_1_m_img.png'
                }, {
                    title: '三大奖励机制灵活搭配设置',
                    detail: '积分、优惠券、余额三种奖励模式相结合，可灵活设置自由搭配，满足多样需求，有效推动用户活跃留存。',
                    img: '/static/image/vipMarketing/3_2_m_img.png'
                }, {
                    title: '精细化用户运营数据分析',
                    detail: '活动参与率、参与人数、奖励发放情况，活动前后会员、销额、订单对比分析一目了然，为您提供精细化用户运营数据基础，让您更加了解用户行为。',
                    img: '/static/image/vipMarketing/3_3_m_img.png'
                }]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .vip-marketing {
        padding: 0 0 80px;
    }
    .function-bg-title {
        width: 100%;
        height: 138px;
        background: #fff;
        font-size: 34px;
        font-weight: 600;
        color: #3b426b;
        line-height: 150px;
        text-align: center;
    }
    .firstScreen {
        min-height: 1100px;
    }
    .secondScreen {
        min-height: 3000px;
    }
</style>