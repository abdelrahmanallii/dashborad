import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',
  {
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
      localStorage.setItem('user', JSON.stringify(userData))
    },
    getUser() {
      const user = localStorage.getItem('user')
      return user ? JSON.parse(user) : null
    },
    removeUser() {
      localStorage.removeItem('user')
    },
    setToken(token) {
      this.token = token
      localStorage.setItem('token', JSON.stringify(token))
    },
    getToken() {
      const storedToken = localStorage.getItem('token')
      return storedToken ? JSON.parse(storedToken) : null
    },
    removeToken() {
      localStorage.removeItem('token')
    },
    logout(router) {
      this.removeToken()
      this.removeUser()
      if (router) {
        router.push({ name: 'login' })
      }
    },
  },
})
