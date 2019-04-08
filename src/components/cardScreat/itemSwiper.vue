<template>
  <div class="itemThree" :style="{background:background}">
    <div class="swiper">
      <swipe :itemUrlList="itemUrlList" ></swipe>
    </div>
    
  </div>
</template>

<script>
 import itemHeader from './itemHeader.vue'
 import swipe from './ShowSwiper.vue'
  export default {
    name:'',
    props:{
        itemHeaderTitle:{
            type:String
        },
        itemText:{
            type:String
        },
        background:{
            type:String
        },
        itemUrlList:{
            type:Array
        }
    },
    data () {
      return {
        active: 0,
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
    // background-color: #f5f8ff;
    padding-top: 80px;
    // margin-bottom: 80px;
   .headerTitle{
     padding-bottom:50px;
        p {
            margin: 0 auto; 
            margin-top: 20px;
            font-size:0.69rem;
            // text-align: center;
            color: #7b88a2;
            width: 80%;

        }
      } 
    .swiper{
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
    }
}
 
</style>