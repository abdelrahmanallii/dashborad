import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore( 'user', {
  state: () => ({
    user: {
      id: '',
      email: '',
      password: '',
      access_token: '',
      firstname: '',
      lastname: '',
      storename: '',
    }
  }),
  actions: {
    },
  })

