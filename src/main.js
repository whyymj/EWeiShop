import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import MetaInfo from 'vue-meta-info'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';
import 'vant/lib/index.css';
import axios from 'axios';

import {
  Lazyload
} from 'vant';
import VueLazyload from 'vue-lazyload'
// options 为可选参数，无则不传
Vue.use(Lazyload, {
  preLoad: 1.3,
  loading: '/static/image/loading.png',
  error: '/static/image/loading.png',
  attempt: 1
});
Vue.use(VueLazyload, {
  lazyComponent: true
});
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.use(MetaInfo)
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')