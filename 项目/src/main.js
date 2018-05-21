// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import Animate from 'animate.css'
import '@assets/css/index.scss'

import Util  from '@/services/util'


Vue.use(ElementUI)
Vue.use(Animate)
Vue.use(Util)



sync(store, router)


if (process.env.NODE_ENV == 'production') {
  Vue.host = Vue.prototype.$host = '/';
}
else {
  Vue.host = Vue.prototype.$host = 'http://192.168.80.11:8004/';
}

new Vue({
  el: '#app',
  router,
  store,
  watch: {
    $route: {
      handler: function (route) {
        let title = route.meta && route.meta.title || ''
        document.title = "这是一个神奇的网站- " + title
      },
      immediate: true
    }
  },
  components: { App },
  template: '<App/>'
})
