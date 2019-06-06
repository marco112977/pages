import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import 'lib-flexible' // 移动端适配
import { MuHeader, MuFooter } from '../../components'
Vue.config.productionTip = false

Vue.component('mu-header', MuHeader)
Vue.component('mu-footer', MuFooter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
