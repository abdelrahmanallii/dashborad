import { defineStore } from 'pinia'

export const useUserStore = defineStore('', {
  state: () => ({
    user: {
      email: '',
      storename: '',
      profile_picture: '',
    },
    token: {
      access_token: '',
    },
  }),
  actions: {
    setUser(userData) {
      this.user = userData
      // localStorage يحتاج string، لذلك يجب تحويل object إلى JSON
      localStorage.setItem('user', JSON.stringify(userData))
      console.log('تم حفظ بيانات المستخدم في localStorage:', userData)
      console.log('التحقق من localStorage:', localStorage.getItem('user'))
    },
    getUser() {
      const user = localStorage.getItem('user')
      return user ? JSON.parse(user) : null
    },
    removeUser() {
      this.user = {}
      localStorage.removeItem('user')
    },
    setToken(token) {
      // حفظ التوكن في state و localStorage
      if (typeof token === 'string') {
        // إذا كان string، احفظه مباشرة في localStorage كـ string
        this.token = { access_token: token }
        localStorage.setItem('token', token) // حفظ مباشر كـ string
      } else if (token && typeof token === 'object') {
        // إذا كان object، احفظه في state و localStorage
        this.token = token
        // إذا كان object يحتوي على access_token فقط، احفظه كـ string مباشرة
        if (token.access_token && Object.keys(token).length === 1) {
          localStorage.setItem('token', token.access_token)
        } else {
          localStorage.setItem('token', JSON.stringify(token))
        }
      }
    },
    getToken() {
      // محاولة جلب التوكن من localStorage
      const storedToken = localStorage.getItem('token')
      if (storedToken) {
        try {
          // محاولة parsing كـ JSON
          const parsedToken = JSON.parse(storedToken)
          // إذا كان object، استخدمه
          if (typeof parsedToken === 'object' && parsedToken !== null) {
            this.token = parsedToken
            return parsedToken
          } else {
            // إذا كان string بعد parsing
            const tokenData = { access_token: parsedToken }
            this.token = tokenData
            return tokenData
          }
        } catch {
          // إذا فشل parsing، يعني التوكن string مباشرة
          const tokenData = { access_token: storedToken }
          this.token = tokenData
          return tokenData
        }
      }
      return null
    },
    removeToken() {
      this.token = { access_token: '' }
      localStorage.removeItem('token')
    },
    // دالة تسجيل الخروج - تحذف التوكن فقط
    logout(router) {
      // حذف التوكن
      this.removeToken()
      // حذف بيانات المستخدم من localStorage إذا كانت موجودة (للمستخدمين القدامى)
      this.removeUser()
      localStorage.removeItem('user')
      // إعادة التوجيه إلى صفحة تسجيل الدخول
      if (router) {
        router.push({ name: 'login' })
      }
    },
  },
})
