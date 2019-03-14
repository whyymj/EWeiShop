<template>
  <div id="app">
    <navigtor></navigtor>
    <router-view/>
    <page-footer></page-footer>
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
    mounted() {}
  }
</script>

<style lang="scss">
  #app {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .navigator {
      .van-popup {
        width: 540px;
        height: 100%;
      }
      .van-collapse-item {
        border: none;
        >.van-cell {
          margin-top: 35px;
          &:after {
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
    }
  }
</style>
