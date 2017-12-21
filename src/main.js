// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./vuex/store";
import vueBeauty from 'vue-beauty'
import 'vue-beauty/package/style/vue-beauty.min.css'
import VueLazyLoad from 'vue-lazyload'


Vue.config.productionTip = false;
Vue.use(vueBeauty);
Vue.use(VueLazyLoad,{
  error:'./static/error.png',
  loading:'./static/loading.png'
}),

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
