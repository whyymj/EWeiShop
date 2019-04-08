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
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/new-retail',
      name: 'Retail',
      component: () => import('./views/Retail.vue')
    },
    {
      path: '/aboutus',
      name: 'about',
      component: () => import( /* webpackChunkName: "about" */ './views/AboutUs.vue')
    },
    {
      path: '/news/:type',
      name: 'Retail',
      component: () => import('./views/News.vue')
    },
    {
      path: '/news-detail',
      name: 'NewsDetail',
      component: () => import('./views/NewsDetail.vue')
    }, {
      path: '/distribution',
      name: 'DistributionScheme',
      component: () => import('./views/DistributionScheme.vue')
    }, {
      path: '/groupBuy',
      name: 'GroupBuy',
      component: () => import('./views/GroupBuy.vue')
    },
    {
      path: '/spike',
      name: 'Spike',
      component: () => import('./views/Spike.vue')
    }, {
      path: '/renovation',
      name: 'Renovation',
      component: () => import('./views/Renovation.vue')
    }, {
      path: '/service',
      name: 'Service',
      component: () => import('./views/Service.vue')
    }, {
      path: '/social-contact',
      name: 'Renovation',
      component: () => import('./views/SocialContact.vue')
    }, {
      path: '/iframe/:url',
      name: 'Renovation',
      component: () => import('./views/IFrameContainer.vue')
    },{
      path: '/customerService',
      name: 'CustomerService',
      component: () => import('./views/CustomerService.vue')
    },{
      path: '/custormServiceActive',
      name: 'CustormServiceActive',
      component: () => import('./views/CustormServiceActive.vue')
    },
    {
      path: '/cardScreat',
      name: 'CardScreat',
      component: () => import('./views/CardScreat.vue')
    }
  ]
})