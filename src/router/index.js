import Vue from 'vue'
import VueRouter from 'vue-router'

import isElectron from 'is-electron'

import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  }
]

const router = new VueRouter({
  mode: isElectron() ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
