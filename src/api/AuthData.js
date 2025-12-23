import { ref } from 'vue'
import api from './index'
import { useUserStore } from '@/stores/Auth'

/**
 * Composable function للتعامل مع بيانات تسجيل الدخول
 */
export function useAuthData() {
  const loading = ref(false)
  const error = ref(null)

  /**
   * دالة تسجيل الدخول
   * @param {string} email - البريد الإلكتروني
   * @param {string} password - كلمة المرور
   * @returns {Promise<{success: boolean, error?: string}>}
   */
  const Login = async (email, password) => {
    loading.value = true
    error.value = null

    try {
      const response = await api.post('login', {
        email,
        password,
      })

      // حفظ التوكن في الـ store
      const userStore = useUserStore()

      // البحث عن التوكن في أماكن مختلفة من الاستجابة
      const inToken = response.data?.access_token || response.data?.data?.access_token

      if (inToken) {
        // تحضير كائن التوكن للـ store
        const token = inToken
        userStore.setToken(token)

        // البحث عن بيانات المستخدم بشكل منفصل عن التوكن
        const userData = response.data?.data?.data || response.data?.data
        if (userData) {
          // حفظ بيانات المستخدم بشكل منفصل في store و localStorage
          userStore.user.email = userData.email
          userStore.user.storename = userData.storename
          userStore.user.profile_picture = userData.profile_picture
          userStore.setUser(userStore.user)

          console.log('✅ تم حفظ بيانات المستخدم بشكل منفصل في localStorage')
        }

        return { success: true }
      } else {
        return { success: false, error: 'لم يتم استلام التوكن من الخادم' }
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        'حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى'

      error.value = errorMessage
      return { success: false, error: errorMessage }
    } finally {
      loading.value = false
    }
  }

  return {
    
    Login,
  }
}
