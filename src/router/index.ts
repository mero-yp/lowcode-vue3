import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LayoutBox',
    component: ()=> import('../components/LayoutBox.vue'),
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
