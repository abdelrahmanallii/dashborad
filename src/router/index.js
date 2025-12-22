import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/Auth'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }, // هذه الصفحة تحتاج تسجيل دخول
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: true }, // هذه الصفحة تحتاج تسجيل دخول
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false }, // صفحة تسجيل الدخول لا تحتاج auth
    },
  ],
})

// Navigation Guard - للتحقق من تسجيل الدخول
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  // التحقق من وجود التوكن
  const token = userStore.getToken()
  const isAuthenticated = !!token

  // إذا كانت الصفحة تحتاج تسجيل دخول
  if (to.meta.requiresAuth) {
    // إذا لم يكن المستخدم مسجل دخول
    if (!isAuthenticated) {
      // إعادة التوجيه إلى صفحة تسجيل الدخول
      next({ name: 'login' })
    } else {
      // إذا كان مسجل دخول، السماح بالوصول
      next()
    }
  }
  // إذا كانت صفحة تسجيل الدخول والمستخدم مسجل دخول بالفعل
  else if (to.name === 'login' && isAuthenticated) {
    // إعادة التوجيه إلى الصفحة الرئيسية
    next({ name: 'home' })
  }
  // السماح بالوصول للصفحات العامة
  else {
    next()
  }
})

export default router
