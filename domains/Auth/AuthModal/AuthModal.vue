<template>
  <tr-modal :is-open="currentIsOpen" :max-width="500" @close="close">
    <template #title> Войти </template>

    <tr-tabs v-model="activeTab">
      <tr-tab v-for="(tab, idx) in tabs" :key="idx" :model-value="idx">
        {{ tab }}
      </tr-tab>
    </tr-tabs>

    <tr-tabs-content v-model="activeTab">
      <tr-tab-window :model-value="0">
        <auth-form />
      </tr-tab-window>
      <tr-tab-window :model-value="1">
        <auth-sign-in-form />
      </tr-tab-window>
    </tr-tabs-content>
  </tr-modal>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { AuthForm, AuthSignInForm } from '@/domains/Auth'
import {
  TrModal,
  TrTabs,
  TrTab,
  TrTabsContent,
  TrTabWindow,
} from '@/domains/UI'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'update:is-open', value: boolean): void
}>()

const currentIsOpen = useVModel(props, 'isOpen', emit)

const activeTab = ref(0)
const tabs = ['Войти', 'Регистрация']

function close() {
  emit('update:is-open', false)
}
</script>

<style lang="scss" src="./AuthModal.scss"></style>
