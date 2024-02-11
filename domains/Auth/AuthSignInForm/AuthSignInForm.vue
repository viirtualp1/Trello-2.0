<template></template>

<script lang="ts" setup>
import { TrInput, TrButton } from '@/domains/UI'
import { useAuth } from '@/domains/Auth'

const { login } = useAuth()

function submit() {
  login(form)
}
</script>

<style lang="scss" src="./AuthSignInForm.scss"></style>
