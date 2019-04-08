<template>
  <div class="itemTwo">
    <div class="content">
        <div class="con">
            <img v-lazy="'/static/image/customerService/csActive/2.png'" alt="" class="conImg">
            <p class="conTitle">2年期</p>
            <div class="price">
                <span class="yen">&yen;&nbsp;</span>
                <span class="number">2299</span>
            </div>
            <div class="conTitle3">
                <ul>
                    <li>2年有效</li>
                    <li>不限坐席</li>
                </ul>
            </div>
            <router-link tag='div' class="navigator__adv" to='/service'>
                <div class='clickCon'>立即抢购</div>
            </router-link>
        </div>
        <div class="con" style="color:#7a96ff;">
            <img v-lazy="'/static/image/customerService/csActive/3.png'" alt="" class="conImg" >
            <p class="conTitle">1年期</p>
            <div class="price price1">
                <span class="yen">&yen;&nbsp;</span>
                <span class="number">1299</span>
            </div>
            <div class="conTitle3">
                <ul>
                    <li>2年有效</li>
                    <li>不限坐席</li>
                </ul>
            </div>
            <router-link tag='div' class="navigator__adv" to='/service' id='navigator__adv'>
                <div class='clickCon'>立即抢购</div>
            </router-link>
        </div>
    </div>
    
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
.itemTwo{
      overflow: hidden;
      .content{
          width: 80%;
          margin: 0 auto;
          .con{
          float: left;
          width: 260px;
          height: 440px;
          border: 1px solid #fff;
          border-radius: 6px;
          -webkit-border-radius:6px;
          -moz-border-radius:6px;
          -ms-border-radius:6px;
          -o-border-radius:6px;
          box-shadow: 0 4px 20px rgba(179,179,179, 0.2);
          -moz-box-shadow:0 4px 20px rgba(179,179,179, 0.2);
	      -webkit-box-shadow:0 4px 20px rgba(179,179,179, 0.2);
          color: #ff9c56;
          margin-top: -5px;
          text-align: center;
          position: relative;
          margin-left: 25px; 
          .conImg{
                max-width: 100%;
                margin-top: 3px;
          }
          .conTitle{
              color: #fff;
              font-size: 32px;
              position: absolute;
              top:30px;
              left: 35.5%
              
          }
            .price{
              font-weight: bolder;
              .yen{
                  font-size: 24px;

              }
              .number{
                  font-size: 48px;
              }
              position: absolute;
              top:150px;
              left: 26.5%
          }
          .conTitle2{
              color: #b0b3bf;
              font-size: 26px;
              text-decoration:line-through;
              position: absolute;
              top:174px;
              left: 36%
          }
         
         
          .conTitle3{
              font-size: 24px;
              font-weight: 500;
              ul{
                  li{
                      list-style-type:disc;
                      text-indent: -5px;
                  }
              }
              position: absolute;
              top:230px;
              left: 38.5%
             
          }
          #navigator__adv{
               border: 1px solid #7a96ff;;
          }
          .navigator__adv {
                height: 54px;
                width: 166px;
                border: 1px solid #ff9c56;
                border-radius: 4px;
                position: absolute;
                overflow: hidden;
                bottom: 55px;
                left: 19%;
                .clickCon{
                    width: 100%;
                    height:100%;
                    text-align: center;
                    font-size: 24px;
                    line-height: 54px;
                }
                
          }
          
      }
      
      
    }
}
</style>