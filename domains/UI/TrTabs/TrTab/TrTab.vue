<template>
  <tr-button @click="onTabClick" class="tr-tab">
    <slot />
  </tr-button>
</template>

<script setup lang="ts">
import { TrButton } from '@/domains/UI'

const props = defineProps<{
  value: string
}>()

const emit = defineEmits<{
  (e: 'update:value', value: string): void
}>()

function onTabClick() {
  emit('update:value', props.value)
}
</script>

<style lang="scss" src="./TrTab.scss"></style>
