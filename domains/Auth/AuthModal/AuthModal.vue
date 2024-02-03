<template>
  <tr-modal :is-open="currentIsOpen" :max-width="400" @close="close">
    <auth-form />
  </tr-modal>
</template>

<script setup lang="ts">
import { AuthForm } from '@/domains/Auth'
import { TrModal } from '@/domains/UI'
import { useVModel } from '@vueuse/core'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits({
  'update:is-open': (_v: boolean) => true,
})

const currentIsOpen = useVModel(props, 'isOpen', emit)

function close() {
  emit('update:is-open', false)
}
</script>

<style lang="scss" src="./AuthModal.scss"></style>
