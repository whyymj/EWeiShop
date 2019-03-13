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
    components:{
      navigtor,pageFooter
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  #app {
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
    overflow: auto;
  }
</style>
