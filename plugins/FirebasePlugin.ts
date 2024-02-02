import { defineNuxtPlugin, useAppConfig } from 'nuxt/app'
import { initializeApp } from 'firebase/app'

export default defineNuxtPlugin(() => {
  const firebaseConfig = useAppConfig()

  initializeApp(firebaseConfig)
})
