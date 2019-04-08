<template>
  <div class="itemHeader">
    <p class="itemHeaderTitle" v-html="itemHeaderTitle">{{itemHeaderTitle}}</p>
  </div>
</template>

<script>

  export default {
    name:'',
    props:['itemHeaderTitle'],
    data () {
      return {

      };
    },
  }

</script>
<style lang='scss' scoped>
    .itemHeader{
        >.itemHeaderTitle {
            // margin-top: 80px;
            font-size:1.125rem;
            text-align: center;
            color: #5d6494;
            font-weight: 600;
        }
    }
    
</style>