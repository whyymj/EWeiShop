import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import MetaInfo from 'vue-meta-info'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';
import 'vant/lib/index.css';
import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.use(MetaInfo)
Vue.config.productionTip = false
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')