<template>
  <div class="itemOne">
      <div class="headerTitle">
        <item-header :itemHeaderTitle="itemHeaderTitle"></item-header>
        <p>“匠心” 打造，注重产品功能打磨</p>
      </div>
      <div class="itmeOneCon">
          <ul>
              <li>
                  <img v-lazy="'/static/image/customerService/img1.png'" alt="">
                  <p class="conTitle">功能更全面</p>
                  <div class="bar">
                      <span></span>
                  </div>
                  <p class="conContent">多渠道部署</p>
                  <p class="conContent conContent1">满足多样化需求</p>
              </li>
              <li>
                  <img v-lazy="'/static/image/customerService/img2.png'" alt="">
                  <p class="conTitle">管理更高效</p>
                  <div class="bar">
                      <span></span>
                  </div>
                  <p class="conContent">智能化管理</p>
                  <p class="conContent conContent1">提高工作效率</p>
              </li>
              <li>
                  <img v-lazy="'/static/image/customerService/img3.png'" alt="">
                  <p class="conTitle">服务更满意</p>
                  <div class="bar">
                      <span></span>
                  </div>
                  <p class="conContent">洞察需求</p>
                  <p class="conContent conContent1">提升服务价值</p>
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
          itemHeaderTitle:"提升服务价值，从这里开始"
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
    .itemOne{
      background-color: #f5f8ff;
      padding-top: 80px;
      min-height: 600px;
      .headerTitle{
        p {
            margin-top: 15px;
            font-size:24px;
            text-align: center;
            color: #5d6494;
        }
      } 
      .itmeOneCon{
        width:100%;
        margin-top: 40px;
        padding-bottom: 40px;
        ul{
          overflow: hidden;
          margin: 0 auto;
          text-align: center;
          li{
            float: left;
            width: 30%;
            text-align: center;
            background-color: white;
            padding-top: 26px;
            padding-bottom: 20px;
            margin-left: 20px;
            img{
              max-width:80%;
            }
            .conTitle{
              font-size: 0.94rem;
              color: #3b426b;
              margin-top: 16px;
              font-weight: 500;
            }
            .bar{
              text-align: center;
              margin-top: -10px;
              // margin-bottom: 19px;
              span{
                display: inline-block;
                width: 50px;
                height: 4px;
                border-radius: 2px;
                background-color: #6f52fe;
              }
            }
            .conContent{
              font-size: 0.69rem;
              // color: #3b426b;
              // margin-bottom: 10px;
              font-weight: 300;
            }
            .conContent1{
              margin-top: -10px;
            }
          }
        }
      }
    }
</style>
