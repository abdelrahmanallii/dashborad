import { ref } from 'vue'
import api from './index'
import { useUserStore } from '@/stores/Auth'

export function useAuthData() {
  const error = ref(null)

  const Login = async (email, password) => {
    error.value = null

    try {
      const response = await api.post('login', {
        email,
        password,
      })

      const userStore = useUserStore()

      const inToken = response.data?.data?.access_token

      if (inToken) {
        const token = inToken
        userStore.setToken(token)

        const userData = response.data?.data
        if (userData) {
          userStore.user.email = userData.email
          userStore.user.storename = userData.storename
          userStore.user.profile_picture = userData.profile_picture
          userStore.setUser(userStore.user)
        }

        return { success: true }
      } else {
        return { error: 'حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى' }
      }
    } catch (err) {
      const errorMessage = 'حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى'
      error.value = errorMessage
      return { error: errorMessage }
    }
  }
  return {
    Login,
  }
}
