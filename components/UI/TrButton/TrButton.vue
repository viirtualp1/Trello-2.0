<template>
  <div class="tr-button" :class="trButtonClasses">
    <div class="tr-button__prepend">
      <slot name="prepend" />
    </div>

    <slot />

    <div class="tr-button__append">
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TrButtonAvailableTheme } from './types'

const props = defineProps({
  theme: {
    type: String as PropType<TrButtonAvailableTheme>,
    default: 'primary',
  },
})

const trButtonClasses = computed(() => {
  const { theme } = props

  return [theme]
})
</script>

<style lang="scss" src="./TrButton.scss"></style>
