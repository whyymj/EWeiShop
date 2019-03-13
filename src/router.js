import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
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
      path: '/news',
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
      path: '/group-buy',
      name: 'GroupBuy',
      component: () => import('./views/GroupBuy.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import( /* webpackChunkName: "about" */ './views/Test.vue')
    }
  ]
})