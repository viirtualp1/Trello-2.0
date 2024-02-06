import { defineNuxtPlugin, useAppConfig } from 'nuxt/app'
import { initializeApp } from 'firebase/app'
import { getAuth } from '@firebase/auth'

export default defineNuxtPlugin(() => {
  const firebaseConfig = useAppConfig()

  const app = initializeApp(firebaseConfig)

  const auth = getAuth(app)

  return {
    provide: {
      auth,
    },
  }
})
