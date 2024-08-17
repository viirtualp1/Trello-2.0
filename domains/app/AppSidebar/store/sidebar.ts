import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isOpen: undefined as boolean | undefined,
  }),

  actions: {
    setIsOpen(v: boolean | undefined) {
      this.isOpen = v
    },
    show() {
      this.isOpen = true
    },
    hide() {
      this.isOpen = false
    },
  },
})
