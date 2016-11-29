import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import store from './store'
Vue.use(resource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
}).$mount('#app')

