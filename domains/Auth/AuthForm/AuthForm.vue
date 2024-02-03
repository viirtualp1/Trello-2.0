<template>
  <div class="auth-form">
    <tr-input label="Имя" />

    <tr-button block>Войти</tr-button>
  </div>
</template>

<script setup lang="ts">
import { TrInput, TrButton } from '@/domains/UI'
</script>

<style lang="scss" src="./AuthForm.scss"></style>
