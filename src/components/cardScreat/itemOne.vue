<template>
  <div class="itemOne">
     <item-header :itemHeaderTitle="itemHeaderTitle"></item-header>
     <img v-lazy="'/static/image/cardServe/card-serve1.png'" alt="" class="itemImg">
  </div>
</template>

<script>
  import itemHeader from '../customerService/itemHeader.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {
           itemHeaderTitle:"您身边的电子卡密"
      };
    },

    components: {
         itemHeader
    },
  }

</script>
<style lang='scss' scoped>
.itemOne{
    padding-top: 80px;
    padding-bottom: 46px;
    min-height: 600px;
    .itemImg{
        margin-top: 48px;
        max-width: 100%;
    }
}
</style>