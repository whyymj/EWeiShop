<template>
  <div>
    <!-- 头部 -->
    <page-brief></page-brief>
    <!-- 提升服务价值 -->
    <item-one></item-one>
    <!-- 三个类似的:多渠道,智能化,部署 -->
    <div class="itemList">
      <div class="headerTitle">
        <item-header :itemHeaderTitle="itemHeaderTitle1"></item-header>
      </div>
      <item-two :liConOne="licon1" :liConTwo="licon2" ></item-two>
      <div class="itemImg"> 
          <img v-lazy="'/static/image/customerService/main_1.png'" alt="">
      </div>
    </div>
    <div class="itemList">
      <div class="headerTitle">
        <item-header :itemHeaderTitle="itemHeaderTitle2"></item-header>
      </div>
      <item-two :liConOne="licon3" :liConTwo="licon4" ></item-two>
      <div class="itemImg"> 
          <img v-lazy="'/static/image/customerService/main_2.png'" alt="">
      </div>
    </div>
    <div class="itemList">
      <div class="headerTitle">
        <item-header :itemHeaderTitle="itemHeaderTitle3"></item-header>
      </div>
      <item-two :liConOne="licon5" :liConTwo="licon6" ></item-two>
      <div class="itemImg" id="itemImg1"> 
          <img v-lazy="'/static/image/customerService/main_3.png'" alt="">
      </div>
    </div>
    <!-- 手机聊天页面展示 -->
    <item-three></item-three>
    <!-- 功能展示 -->
    <item-four></item-four>
  </div>
</template>

<script>    
  import itemHeader from '../components/customerService/itemHeader'
  import pageBrief from '../components/customerService/PageTopBriefIntro'
  import itemOne from '../components/customerService/itemOne'
  import itemTwo from '../components/customerService/itemTwo'
  import itemThree from '../components/customerService/itemThree'
  import itemFour from '../components/customerService/itemFour'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        licon1:'可接入微信公众号、APP、小程序、H5，多渠道部署，实现客服统一回复和处理',
        licon2:'可支持文字、图片、语音、商品、订单、优惠券、二维码等对话方式，满足用户和客服之间多样化沟通需求',
        licon3:'可设置自动回复、快捷语回复、客服管理等功能，提升客服工作能力，提高工作效率，让您的用户获得最优质的服务',
        licon4:'据客服状态自动分配任务；对会话消息进行排列、筛选；转接会员对话等功能，实现客服高效接待客户，提升用户满意度',
        licon5:'可查看会员信息、对话记录、满意度评价等信息，多维度了解客户状态和用户需求，针对性的进行沟通，让运营有效全面',
        licon6:'商家可查看满意度评价、客服数据等信息，多维度了解客服工作状态，并定制相关工作计划，让运营更全面',
        itemHeaderTitle1:"多渠道部署，满足多样化需求",
        itemHeaderTitle2:"智能化管理，提升工作效率",
        itemHeaderTitle3:"洞察需求，让运营更全面"
      };
    },

    components: {
      itemHeader,
      pageBrief,
      itemOne,
      itemTwo,
      itemThree,
      itemFour
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
.itemList{
  padding-top: 2.5rem;
  .itemImg{
    margin-top: 24px;
    text-align: center;
    img{
      max-width: 80%;
    }
  }
  #itemImg1{
    padding-bottom:70px; 
  }
}

</style>