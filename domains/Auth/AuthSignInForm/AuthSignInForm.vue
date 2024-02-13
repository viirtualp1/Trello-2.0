<template>
  <div class="auth-form">
    <tr-input v-model="form.name" label="Имя" />

    <tr-input v-model="form.email" label="Email" />

    <tr-input v-model="form.password" label="Пароль" />

    <tr-button theme="accent" block @click="submit">
      Зарегистрироваться
    </tr-button>
  </div>
</template>

<script lang="ts" setup>
import { TrInput, TrButton } from '@/domains/UI'
import { useAuth } from '@/domains/Auth'

const { login } = useAuth()

const form = reactive({
  name: 'Никита Зинин',
  email: 'zininnikita309@gmail.com',
  password: 'test123',
})

function submit() {
  login(form)
}
</script>

<style lang="scss" src="./AuthSignInForm.scss"></style>
