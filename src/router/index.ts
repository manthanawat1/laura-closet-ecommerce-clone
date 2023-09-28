import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LauraCloset from '../views/LauraCloset.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'laura_closet',
    component: LauraCloset
  }
]

const router = new VueRouter({
  routes
})

export default router
