import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/views/AboutView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/views/todo/views/TodoView.vue')
    }
  ]
})

export default router
