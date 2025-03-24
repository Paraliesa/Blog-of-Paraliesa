import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '../views/BlogPostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/about',
      name: 'about',
      // 路由懒加载
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog-post',
      component: BlogPostView
    },
  ]
})

export default router