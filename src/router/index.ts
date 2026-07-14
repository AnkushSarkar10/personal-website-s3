import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/WorkView.vue'),
    },
    {
      path: '/wip',
      name: 'wip',
      component: () => import('../views/WipView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
  ],
})

router.beforeEach((to, _from, next) => {
  if (to.path !== '/' && !to.name) {
    next('/')
  } else {
    next()
  }
})

// Always start at home on fresh page load
router.isReady().then(() => {
  if (router.currentRoute.value.path !== '/') {
    router.replace('/')
  }
})

export default router
