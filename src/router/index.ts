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
      path: '/todo',
      name: 'todo',
      component: () => import('@/views/todo/views/TodoView.vue')
    },
    {
      path: '/todoUpdate',
      name: 'todoUpdate',
      component: () => import('@/views/todo/views/TodoUpdateView.vue')
    }
  ]
})

export default router
