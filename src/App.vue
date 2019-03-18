<template>
  <div id="app">
    <div class="app_container" id='app_container'>
      <router-view/>
      <!-- 懒加载footer -->
      <lazy-component>
        <page-footer></page-footer>
      </lazy-component>
    </div>
    <!-- 顶部导航 -->
    <navigtor @toggleFooter='toggleFloatFooter'></navigtor>
    <!-- 底部联系我们免费试用 -->
    <router-link tag='div' class="navigator__adv" to='/service'>
      <img v-lazy="'/static/image/index/phone_.png'" class='navigator__adv__phone' alt="联系我们 免费试用">
      <span class='navigator__adv__callus'>联系我们 &nbsp; 免费试用</span>
    </router-link>
  </div>
</template>

<script>
  import navigtor from './components/global/Navigtor';
  import pageFooter from './components/global/PageFooter'
  export default {
    components: {
      navigtor,
      pageFooter
    },
    watch: {
      '$route' () {
        document.getElementById('app_container').scrollTop = 0;
      }
    },
    data() {
      return {
        showFloatFooter: true
      }
    },
    methods: {
      toggleFloatFooter(bool) {
        this.showFloatFooter = bool;
      }
    },
    beforeCreate() {
      function preventScroll() {
        requestAnimationFrame(() => {
          console.log('eeee')
          preventScroll()
        })
      }
    },
    mounted() {
      setTimeout(() => {
        document.getElementById('firstShow').style = 'opacity:0';
        setTimeout(() => {
          document.getElementById('firstShow').style = 'display:none';
        }, 500)
      }, 0);
    }
  }
</script>

<style lang="scss">
  @keyframes app_blink {
    0% {
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      width: 600px;
      height: 600px;
      opacity: 0.2;
    }
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: fixed;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    top: 0;
    left: 0;
    &>.app_container {
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      position: absolute;
      width: 100%;
      top: 90px;
      left: 0;
      bottom: 96px;
      box-sizing: border-box;
    }
    .navigator {
      .van-popup {
        width: 540px;
        height: 100%;
      }
      .van-collapse-item {
        border: none;
        &:after,
        &:before {
          border: none;
        }
        >.van-cell {
          margin-top: 35px;
          &:after,
          &:before {
            border: none;
          }
        }
      }
      .van-collapse {
        border: none;
      }
    }
    .van-list__finished-text,
    .van-list__loading {
      height: 102px!important;
      line-height: 102px!important;
      font-size: 24px;
      color: #bbb;
      >.van-loading {
        width: 24px;
        height: 24px;
        margin-right: 12px;
      }
      >.van-list__loading-text {
        font-size: 24px;
      }
    }
    >.navigator__statement {
      width: 670px;
      margin: auto;
      height: 132px;
      box-sizing: border-box;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      /*no*/
      padding: 36px 0 0 0;
      >span {
        display: block;
        font-size: 20px;
        color: #3d404d;
        line-height: 32px;
        text-align: center;
      }
    }
    >.navigator__adv {
      height: 98px;
      width: 100%;
      position: absolute;
      overflow: hidden;
      z-index: 1999;
      bottom: 0;
      left: 0;
      transition: all .5s;
      background: linear-gradient(135deg, #ff6231, #ff3636);
      >.navigator__adv__phone {
        position: absolute;
        width: 40px;
        height: 40px;
        left: 140px;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      >.navigator__adv__callus {
        line-height: 98px;
        text-align: center;
        width: 100%;
        height: 100%;
        float: left;
        font-size: 36px;
        color: #fff;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: rgba(0, 0, 0, 0.1);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        animation: app_blink 2s ease infinite;
      }
    }
  }
</style>
