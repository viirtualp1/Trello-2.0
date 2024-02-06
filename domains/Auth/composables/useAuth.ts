import { type UserFormData, useAuthStore } from '../index'
import { createUserWithEmailAndPassword } from '@firebase/auth'

export function useAuth() {
  const { $auth: auth } = useNuxtApp()
  const authStore = useAuthStore()

  const { setUser } = authStore

  const user = computed(() => authStore.user)

  async function login(form: UserFormData) {
    const { email, password } = form

    if (!email || !password) {
      return
    }

    try {
      const { user: userResponse } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )

      setUser(userResponse)
    } catch (err) {
      console.error(err)
    }
  }

  return {
    user,
    auth,
    setUser,
    login,
  }
}
