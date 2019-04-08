<template>
  <div>
    <!-- 头部 -->
    <page-brief></page-brief>
    <!-- 第一部分 -->
    <item-one></item-one>
    <!-- 轮播图 -->
    <item-swiper  :itemHeaderTitle="itemHeaderTitle" :itemUrlList="itemUrlList" :background="background"></item-swiper>
    <item-swiper  :itemHeaderTitle="itemHeaderTitle1" :itemUrlList="itemUrlList1" :background="background1"></item-swiper>
  </div>
</template>

<script>
 import pageBrief from '../components/cardScreat/PageTopBriefIntro.vue'
 import itemOne from '../components/cardScreat/itemOne.vue'
 import itemSwiper from '../components/cardScreat/itemSwiper.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {
          itemHeaderTitle:"手机聊天页面展示",
          itemUrlList:[
            {imgUrl:'/static/image/cardServe/cm_function01.png',itemHeaderTitle:'高度灵活的卡密库设置',text:'可设置不同的卡密分类，设置多规格卡密库，自定义名称，卡密库设置灵活多变，满足您的多样性需求。'},
            {imgUrl:'/static/image/cardServe/cm_function02.png',itemHeaderTitle:'更便捷的操作体验',text:'可手动调整发卡顺序，批量设置卡密分类、批量删除卡密库、批量恢复卡密库，人性化的设置，给您提供极大便利。'},
            {imgUrl:'/static/image/cardServe/cm_function03.png',itemHeaderTitle:'快速的数据处理能力',text:'在批量上传中支持一次性导入2Mb的Excel文件，并支持断点续传，上传失败会有提示，可以导出查看后直接再导入，快速的数据处理能力，让您用的更放心。'},
            {imgUrl:'/static/image/cardServe/cm_function04.png',itemHeaderTitle:'清晰直观的数据结构',text:'系统页面结构清晰，交互体验友好，大大降低了操作难度，节省您的操作成本。'}
          ],
          background:'#f5f8ff',
          // 下面轮播图
          itemHeaderTitle1:"人性化的用户体验",
          itemUrlList1:[
            {imgUrl:'/static/image/cardServe/function05.png',itemHeaderTitle:'人性化的用户体验',text:'用户完成订单，可在发货信息中，使用一键复制按钮复制所需卡密，操作方便，提高用户满意度 。'},
            {imgUrl:'/static/image/cardServe/function06.png' ,itemHeaderTitle:'贴心的提示说明',text:'针对卡密库可设置使用说明，用户完成订单，可在订单详情页查看使用说明，节约您的沟通时间。'},
            {imgUrl:'/static/image/cardServe/function07.png',itemHeaderTitle:'更安全的发货方式',text:'自动发货后卡密直接绑定在订单里，用户无法删掉，方便用户随时查询使用。'},
          ],
          background1:'#ffffff',
      };
    },

    components: {
      pageBrief,
      itemOne,
      itemSwiper
    },
    

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>

</style>