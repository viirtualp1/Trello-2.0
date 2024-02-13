<template>
  <tr-modal :is-open="currentIsOpen" @close="close">
    <template #title> Войти </template>

    <tr-tabs v-model="activeTab">
      <tr-tab v-for="(tab, idx) in tabs" :key="idx" :model-value="idx">
        {{ tab.name }}
      </tr-tab>
    </tr-tabs>

    <tr-tabs-content v-model="activeTab">
      <tr-tab-window v-for="(tab, idx) in tabs" :key="idx" :model-value="idx">
        <component :is="tab.component" />
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

const tabs = [
  { name: 'Войти', component: AuthForm },
  { name: 'Регистрация', component: AuthSignInForm },
]

function close() {
  emit('update:is-open', false)
}
</script>

<style lang="scss" src="./AuthModal.scss"></style>
