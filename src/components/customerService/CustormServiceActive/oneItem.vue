<template>
  <div class="itemOne">
    <div class="headerTitle">
        <item-header :itemHeaderTitle="itemHeaderTitle"></item-header>
        <p>为答谢老客户的支持，现倾情回馈</p>
    </div>
    <div class="itemImgOne">
     <img v-lazy="'/static/image/customerService/csActive/cardone.png'" alt="" class="itemImg">

    </div>
     <div class="itemImgTwo">
        <img v-lazy="'/static/image/customerService/csActive/card2.png'" alt="" class="itemImg2">
        <img v-lazy="'/static/image/customerService/csActive/card3.png'" alt="" class="itemImg2">
     </div>
    
    <!-- <div class="con">
        <img v-lazy="'/static/image/customerService/csActive/card1.png'" alt="" class="conImg">
        <p class="conTitle">永久有效</p>
        <p class="conTitle2">原价：&yen;4999</p>
        <div class="activePrice">
            <span>活动价</span>
        </div>
        <div class="price">
            <span class="yen">&yen;&nbsp;</span>
            <span class="number">2999</span>
        </div>
        <div class="conTitle3">
            <span>永久有效&nbsp;&nbsp;不限坐席</span>
        </div>
        <router-link tag='div' class="navigator__adv" to='/service'>
            <div class='clickCon'>立即抢购</div>
        </router-link>
    </div> -->
  </div>
</template>

<script>
    import itemHeader from '../itemHeader.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {
          itemHeaderTitle:'新品上线&nbsp;&nbsp;&nbsp;抄底价放送'
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
      padding-top: 80px;
      .headerTitle{
        p {
            margin-top: 15px;
            font-size:24px;
            text-align: center;
            color: #5d6494;
        }
      } 
      .con{
          margin: 0 auto;
          width: 80%;
          margin-top: -5px;
          text-align: center;
          position: relative;
          .conImg{
              max-width: 100%;
              height: 550px;
              z-index: -1;
          }
          .conTitle{
              color: #fff;
              font-size: 32px;
              position: absolute;
              top:70px;
              left: 38.5%
              
          }
          .conTitle2{
              color: #b0b3bf;
              font-size: 26px;
              text-decoration:line-through;
              position: absolute;
              top:194px;
              left: 36.5%
          }
          .activePrice{
              width: 94px;
              height: 40px;
              color:#fb5438;
            //   margin-top: 20px;
              text-align: center;
              border: 2px solid #fb5438;
              border-radius: 4px;
              -webkit-border-radius:4px;
              -moz-border-radius:4px;
              -ms-border-radius:4px;
              -o-border-radius:4px;
              
              span {
                  font-weight: 500;
                  line-height: 40px;
              }
              position: absolute;
              top:247px;
              left: 41.5%
          }
          .price{
              color: #ff4624;
              font-weight: bolder;
              .yen{
                  font-size: 48px;

              }
              .number{
                  font-size: 96px;
              }
              position: absolute;
              top:327px;
              left: 26.5%
          }
          .conTitle3{
              font-size: 24px;
              color: #fb5638;
              font-weight: 500;
              position: absolute;
              top:394px;
              left: 33.5%
          }
          .navigator__adv {
                height: 54px;
                width: 232px;
                border-radius: 4px;
                position: absolute;
                overflow: hidden;
                // z-index: 1999;
                bottom: 65px;
                left: 31.5%;
                transition: all .5s;
                background: linear-gradient(135deg, #ff6231, #ff3636);
                .clickCon{
                    width: 100%;
                    height:100%;
                    color: #fff;
                    text-align: center;
                    font-size: 32px;
                    line-height: 54px;
                }
                &:after {
                    opacity: 0.2;
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    background: rgba(0, 0, 0,1);
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    animation: app_blink 2s ease infinite;
                }
          }
      
      }
      .itemImg{
          max-width: 90%;
      }
      .itemImgOne{
          text-align: center;
      }
      .itemImgTwo{
          text-align: center;
          .itemImg2{
                  max-width: 42.5%;
                // width: 300px;
            }
      }
      
      
}
</style>