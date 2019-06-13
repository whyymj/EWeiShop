import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '*',
      redirect: '/',
    },
    {
      path: '/', //首页
      name: 'Index',
      component: Index
    },
    {
      path: '/new-retail', //新零售
      name: 'Retail',
      component: () => import('./views/Retail.vue')
    },
    {
      path: '/aboutus', //关于我们
      name: 'about',
      component: () => import(  './views/AboutUs.vue')
    },
    {
      path: '/news/:type', //新闻中心
      name: 'Retail',
      component: () => import('./views/News.vue')
    },
    {
      path: '/news-detail', //新闻详情
      name: 'NewsDetail',
      component: () => import('./views/NewsDetail.vue')
    }, {
      path: '/distribution', //分销解决方案
      name: 'DistributionScheme',
      component: () => import('./views/DistributionScheme.vue')
    }, {
      path: '/groupBuy', //团购
      name: 'GroupBuy',
      component: () => import('./views/GroupBuy.vue')
    },
    {
      path: '/spike', //秒杀
      name: 'Spike',
      component: () => import('./views/Spike.vue')
    }, {
      path: '/renovation', //店铺装修
      name: 'Renovation',
      component: () => import('./views/Renovation.vue')
    }, {
      path: '/service', //客服弹窗
      name: 'Service',
      component: () => import('./views/Service.vue')
    }, {
      path: '/social-contact', //社交电商解决方案
      name: 'Renovation',
      component: () => import('./views/SocialContact.vue')
    }, {
      path: '/iframe/:url', //外连接
      name: 'Renovation',
      component: () => import('./views/IFrameContainer.vue')
    }, {
      path: '/customerService', //在线客服系统
      name: 'CustomerService',
      component: () => import('./views/CustomerService.vue')
    }, {
      path: '/custormServiceActive', //客服活动页
      name: 'CustormServiceActive',
      component: () => import('./views/CustormServiceActive.vue')
    },
    {
      path: '/cardScreat', //电子卡密页
      name: 'CardScreat',
      component: () => import('./views/CardScreat.vue')
    },
    {
      path: '/actions', //活动页
      name: 'Actions',
      component: () => import('./views/Actions.vue')
    },
    {
      path: '/vipMarketing', //活动页
      name: 'VipMarketing',
      component: () => import('./views/VipMarketing.vue')
    },{
      path: '/storeAssistant',
      name: 'StoreAssistant',
      component: () => import('./views/StoreAssistant.vue')
    }
  ]
})