<template>
  <div class="itemThree">
    <div  class="headerTitle">
       <item-header :itemHeaderTitle="itemHeaderTitle"></item-header>
       <p>加强商家与用户之间关系，辅助商家销售，提升服务价值</p>
    </div>
    <div class="swiper">
      <swipe></swipe>
    </div>
    
  </div>
</template>

<script>
 import itemHeader from './itemHeader.vue'
 import swipe from './ShowSwiper.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        active: 0,
         itemHeaderTitle:"手机聊天页面展示",
         images: [
          '/static/image/customerService/img7.png',
          '/static/image/customerService/img8.png'
         ]
      };
    },

    components: {
        itemHeader,
        swipe
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
.itemThree{
    background-color: #f5f8ff;
    padding-top: 80px;
    // margin-bottom: 80px;
   .headerTitle{
     padding-bottom:50px; 
        p {
            margin-top: 20px;
            font-size:0.69rem;
            text-align: center;
            color: #5d6494;
        }
      } 
    .swiper{
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
    }
}
 
</style>