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

interface Props {
  theme: TrButtonAvailableTheme
  icon?: boolean
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'primary',
})

const trButtonClasses = computed(() => {
  const { theme, icon, block } = props

  return [theme, { icon, block }]
})
</script>

<style lang="scss" src="./TrButton.scss"></style>
