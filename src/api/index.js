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

api.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.getToken()

    if (token) {
      const tokenValue = token
      if (tokenValue) {
        config.headers.Authorization = `Bearer ${tokenValue}`
      }
    }
    return config
  },
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const userStore = useUserStore()
      userStore.removeToken()
      userStore.removeUser()
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    }
    (error) => {
      return Promise.reject(error)
    }
  },
)

export default api
