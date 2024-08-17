import { defineStore } from 'pinia'
import { type UserData } from '@/domains/Auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: undefined as UserData | undefined,
  }),

  actions: {
    setUser(user: UserData) {
      this.user = user
    },
  },
})
