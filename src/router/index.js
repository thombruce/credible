import Vue from 'vue'
import VueRouter from 'vue-router'

import isElectron from 'is-electron'

import { user } from '@/plugins/helvellyn-vue'

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Account from '../views/Account.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  }
]

const router = new VueRouter({
  mode: isElectron() ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['login', 'signup']
  const authRequired = !publicPages.includes(to.name)
  const loggedIn = user.authenticated

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})

export default router
