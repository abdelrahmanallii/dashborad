import axios from 'axios'
import { useUserStore } from '@/stores/Auth'

// إنشاء instance من axios مع base URL
const api = axios.create({
  baseURL: 'https://api-test.mobilemasr.com/vendor/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

// Request Interceptor - لإضافة التوكن تلقائياً لكل طلب
api.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.getToken()

    // إذا كان هناك توكن، أضفه للهيدر
    if (token) {
      // دعم كلا الحالتين: object مع access_token أو string مباشرة
      const tokenValue = token.access_token || token
      if (tokenValue) {
        config.headers.Authorization = `Bearer ${tokenValue}`
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response Interceptor - للتعامل مع الأخطاء
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // إذا كان الخطأ 401 (غير مصرح)، قم بتسجيل الخروج
    if (error.response && error.response.status === 401) {
      const userStore = useUserStore()
      userStore.removeToken()
      userStore.removeUser()

      // إعادة التوجيه إلى صفحة تسجيل الدخول
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  },
)

export default api
