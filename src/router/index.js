import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../pages/mainPage.vue'
import orderPage from '../pages/orderPage.vue'
import storeInfoPage from '../pages/storeInfoPage.vue'
import payPage from '../pages/payPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: mainPage
    },
    {
      path: '/orderPage',
      name: 'orderPage',
      component: orderPage
    },
    {
      path: '/storeInfoPage',
      name: 'storeInfoPage',
      component: storeInfoPage
    },
    {
      path: '/payPage',
      name: 'payPage',
      component: payPage
    }
  ]
})
