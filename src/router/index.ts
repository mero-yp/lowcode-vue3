import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LayoutBox',
    component: ()=> import('../components/LayoutBox.vue'),
    children: [
      {
        path: '/mainContent',
        name: 'mainContent',
        alias: '/',
        component: ()=> import('../components/MainContent.vue')
      },
      {
        path: 'dataSource',
        name: 'dataSource',
        component: ()=> import('../views/DataSource.vue')
      },
      
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
