<template>
  <div class="itemFour">
    <div>
      <item-header :itemHeaderTitle="itemHeaderTitle"></item-header>
    </div>
    <div class="con">
      <ul>
        <li>
          <img v-lazy="'/static/image/customerService/gn_1.png'" alt="">
          <p>客服关联会员</p>
        </li>
        <li>
          <img v-lazy="'/static/image/customerService/gn_2.png'" alt="">
          <p>客服工作量设置</p>
        </li>
        <li>
          <img v-lazy="'/static/image/customerService/gn_3.png'" alt="">
          <p>客服数据</p>
        </li>
        <li>
          <img v-lazy="'/static/image/customerService/gn_4.png'" alt="">
          <p>智能回复</p>
        </li>
        <li>
          <img v-lazy="'/static/image/customerService/gn_4.png'" alt="">
          <p>满意度评价</p>
        </li>
        <li>
          <img v-lazy="'/static/image/customerService/gn_4.png'" alt="">
          <p>会员信息</p>
        </li>
        <li>
          <img v-lazy="'/static/image/customerService/gn_4.png'" alt="">
          <p>不同类型消息</p>
        </li>
        <li>
          <img v-lazy="'/static/image/customerService/gn_4.png'" alt="">
          <p>客服分组</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
 import itemHeader from './itemHeader.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {
           itemHeaderTitle:"功能展示"
      };
    },

    components: {
        itemHeader
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
.itemFour{
  padding-top: 80px;
  .con{
  padding-bottom:50px;
  ul{
    width: 100%;
    margin-top: 40px;
    overflow: hidden;
    li{
      width: 25%;
      text-align: center;
      float: left;
      padding-bottom: 40px;
      img{
        width: 70%;
      }
      p{
        font-size: 0.56rem;
        color: #3b426b;
        margin-top: 12px;
      }
    }
  }
}
}

</style>