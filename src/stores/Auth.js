import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: 0,
      idnumber: '',
      code: '',
      firstname: '',
      lastname: '',
      email: '',
      storename: '',
      phone: '',
      birthdate: '',
      address: '',
      orderlocation: '',
      idfront_picture: '',
      idback_picture: '',
      profile_picture: '',
      area_id: 0,
      statu_id: 0,
      type: '',
      gender: null,
      email_verified_at: null,
      deleted_at: null,
      created_at: '',
      updated_at: '',
      self_management: false,
      account_manager_id: 0,
      internal_manager_name: '',
      internal_manager_phone: '',
      mca: false,
      portal: false,
      in_store: false,
      can_update_price: false,
      verified_at: null,
      is_sell_new: false,
      is_sell_used: false,
      city_id: 0,
      forget_pass_code: null,
      statu: {
        id: 0,
        name: '',
        slug: '',
        deleted_at: null,
        created_at: '',
        updated_at: '',
      },
    },
    token: {
      accessToken: '',
      refreshToken: '',
      tokenType: 'Bearer',
      expiresIn: 0,
    },
  }),
  actions: {
    setUser(userData) {
      this.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
    },
    getUser() {
      const user = localStorage.getItem('user')
      return user ? JSON.parse(user) : null
    },
    removeUser() {
      localStorage.removeItem('user')
    },
    setToken(tokenData) {
      this.token = tokenData
      localStorage.setItem('token', JSON.stringify(tokenData))
    },
    getToken() {
      const token = localStorage.getItem('token')
      return token ? JSON.parse(token) : null
    },
    removeToken() {
      localStorage.removeItem('token')
    },
    // دالة تسجيل الخروج - تحذف التوكن وبيانات المستخدم فقط
    logout(router) {
      // حذف التوكن
      this.removeToken()
      // حذف بيانات المستخدم
      this.removeUser()
      // إعادة التوجيه إلى صفحة تسجيل الدخول
      if (router) {
        router.push({ name: 'login' })
      }
    },
  },
})
