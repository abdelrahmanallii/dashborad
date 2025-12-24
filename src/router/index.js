import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/Auth'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/Login.vue'
import Test from '@/views/Test.vue'
import AboutView from '@/views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }, 
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: { requiresAuth: false },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  const token = userStore.getToken()
  const isAuthenticated = !!token

  if (to.meta.requiresAuth) {
    if (!isAuthenticated) {
      next({ name: 'login' })
    } else {
      next()
    }
  }
  else if (to.name === 'login' && isAuthenticated) {
    next({ name: 'home' })
  }
  else {
    next()
  }
})

export default router
