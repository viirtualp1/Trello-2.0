<template>
  <div class="auth-form">
    <tr-input v-model="form.email" label="Email" />

    <tr-input v-model="form.password" label="Пароль" />

    <tr-button theme="ghost" @click="">Зарегистрироваться</tr-button>

    <tr-button block @click="submit">Войти</tr-button>
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
