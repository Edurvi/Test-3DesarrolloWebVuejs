// Composables 
import { createRouter, createWebHistory } from 'vue-router'
import Principal from '../views/Principal.vue'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/Home',
        name: 'Home',
        component:Home
      },
      {
        path: '/Principal',
        name: 'Principal',
        component: Principal  
      },
      
    ]
  } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes 
})

export default router