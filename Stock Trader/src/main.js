import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store/store'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-stock-trader-67fbe.firebaseio.com/stocks/RD5yCssmWD7TyIketXXh'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
