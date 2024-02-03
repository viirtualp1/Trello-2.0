<template>
  <div class="tr-button" :class="trButtonClasses">
    <div class="tr-button__prepend">
      <slot name="prepend" />
    </div>

    <div class="tr-button__body">
      <slot />
    </div>

    <div class="tr-button__append">
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TrButtonAvailableTheme } from './types'

const props = defineProps<{
  theme?: TrButtonAvailableTheme
  icon?: boolean
  block?: boolean
}>()

const trButtonClasses = computed(() => {
  const { theme, icon, block } = props

  return [theme, { icon, block }]
})
</script>

<style lang="scss" src="./TrButton.scss"></style>
