<template>
  <div class="custormServiceActive">
    <!-- 头部 -->
    <page-brief></page-brief>
    <!-- 第一部分 -->
    <item-one></item-one>
    <!-- <item-two></item-two> -->
    

    <!-- 表格部分 -->
    <table-item></table-item>
  </div>
</template>

<script>
  import pageBrief from '../components/customerService/CustormServiceActive/PageTopBriefIntro'
  import itemOne from '../components/customerService/CustormServiceActive/oneItem.vue'
  import itemTwo from '../components/customerService/CustormServiceActive/twoItem.vue'
  import tableItem from '../components/customerService/CustormServiceActive/tableItem.vue'

  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {
        pageBrief,
        itemOne,
        itemTwo,
        tableItem
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
.custormServiceActive{
  .itemImg{
    max-width: 100%;
  }
}
  
</style>