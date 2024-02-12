<template>
  <tr-modal :is-open="currentIsOpen" :max-width="500" @close="close">
    <template #title> Войти </template>
    <tr-tabs>
      <tr-tab value="auth" @update:value="setActiveTab">Войти</tr-tab>
      <tr-tab value="registration" @update:value="setActiveTab">
        Регистрация
      </tr-tab>
    </tr-tabs>

    <auth-form v-if="activeTab === 'auth'"></auth-form>
  </tr-modal>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { AuthForm } from '@/domains/Auth'
import { TrModal, TrTabs, TrTab } from '@/domains/UI'

type TabType = 'registration' | 'auth'

const activeTab = ref<TabType>('auth')

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'update:is-open', value: boolean): void
}>()

const currentIsOpen = useVModel(props, 'isOpen', emit)

function close() {
  emit('update:is-open', false)
}

function setActiveTab(value: string) {
  activeTab.value = value
}
</script>

<style lang="scss" src="./AuthModal.scss"></style>
