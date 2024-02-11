<template>
  <tr-modal :is-open="currentIsOpen" :max-width="500" @close="close">
    <template #title> Войти </template>

    <auth-form v-if="activeTab === 'auth'"></auth-form>
  </tr-modal>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { AuthForm } from '@/domains/Auth'
import { TrModal } from '@/domains/UI'

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
</script>

<style lang="scss" src="./AuthModal.scss"></style>
