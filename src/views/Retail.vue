<template>
  <div class='index'>
    <!-- 新零售解决方案 -->
    <page-brief></page-brief>
    <!-- 重构人、货、场 -->
    <page-info theme='重构人、货、场' detail='线上线下联合乏力，全面布局新零售'>
      <img class='page-info__img page-info__img--restruct' v-lazy='"/static/image/new-retail/img_2.png"' alt="线上线下联合乏力，全面布局新零售">
    </page-info>
    <!-- 轻松转型新零售 -->
    <page-info theme='轻松转型新零售' detail='提升购物体验，随时随地下单消费'>
      <img class='page-info__img page-info__img--transfer' v-lazy='"/static/image/new-retail/img_3.png"' alt="提升购物体验，随时随地下单消费">
    </page-info>
    <!-- 付能线下门店 -->
    <div class='index__off-line-store'>
      <img v-lazy='"/static/image/new-retail/img_bg.png"' alt="赋能线下门店" class="index__off-line-store__bg">
      <div class="index__off-line-store__title">
        <page-info theme='赋能线下门店' :theme-style='themeWhiteStyle' :detail-style='detailWhiteStyle' detail='网店与门店数据互通高效管理'></page-info>
      </div>
      <div class='index__off-line-store__list'>
        <outlineImgs></outlineImgs>
      </div>
      <!-- 会员管理更便捷 -->
      <vip-manage-easier></vip-manage-easier>
    </div>
  </div>
</template>

<script>
  import pageBrief from '../components/retail/PageTopBriefIntro'
  import pageInfo from '../components/retail/PageMiddleInfo'
  import outlineImgs from '../components/retail/IndexOutlineStore'
  import vipManageEasier from '../components/retail/VipManageEasier.vue'
  export default {
    metaInfo: {
      title: '新零售解决方案_助力传统电商转型新零售_人,货,场', // set a title
      meta: [{ // set meta
        name: 'keywords',
        content: '新零售，社交电商，分销商城，EWEISHOP，微信商城，微信小程序，微信小程序商城，微信商城管理，三级分销，千人千面'
      }, {
        name: "description",
        content: 'EWEISHOP新零售社交分销商城，一站式社交电商解决方案，多渠道营销，融合线上线下打造健康闭合的电商生态圈，新零售电商'
      }]
    },
    data() {
      return {
        themeWhiteStyle: {
          color: "#fff"
        },
        detailWhiteStyle: {
          color: "#fff"
        }
      }
    },
    components: {
      pageBrief,
      pageInfo,
      outlineImgs,
      vipManageEasier
    }
  }
</script>

<style scoped lang='scss'>
  .index {
    .page-info__img {
      width: 713px;
      display: block;
      margin: 60px auto 0;
    }
    .page-info__img--transfer {
      margin: 50px auto 48px;
    }
    .index__off-line-store {
      width: 100%;
      position: relative;
      overflow: hidden;
      >.index__off-line-store__bg {
        width: 100%;
        float: left;
      }
      >.index__off-line-store__title {
        position: absolute;
        top: 0;
        width: 100%;
      }
      >.index__off-line-store__list {
        position: absolute;
        top: 222px;
        left: 0;
        width: 100%;
        overflow: hidden;
      }
    }
  }
</style>