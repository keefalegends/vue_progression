// import vue router
import { createRouter, createWebHistory } from 'vue-router'

// define a_routes
const routes = [

  {
    path: '/',
    name: 'landing',
    component: () => import('../views/landing.vue')
  },

  {
    path: '/posts',
    name: 'posts',
    component: () => import('../views/posts.vue')
  }

]

// create router
const router = createRouter({
  history: createWebHistory(),
  routes // <-- routes,
})

export default router