<template>
  <div class="auth-form">
    <tr-input v-model="form.email" type="email" label="Email" />

    <tr-input v-model="form.password" type="password" label="Пароль" />

    <tr-button theme="accent" block @click="submit">Войти</tr-button>
  </div>
</template>

<script setup lang="ts">
import { TrInput, TrButton } from '@/domains/UI'
import { useAuth } from '@/domains/Auth'

const { login } = useAuth()

const form = reactive({
  email: 'zininnikita309@gmail.com',
  password: 'test123',
})

function submit() {
  login(form)
}
</script>

<style lang="scss" src="./AuthForm.scss"></style>
