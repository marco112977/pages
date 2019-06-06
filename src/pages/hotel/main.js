import Vue from 'vue'
import App from './app.vue'
import 'lib-flexible' // 移动端适配
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
