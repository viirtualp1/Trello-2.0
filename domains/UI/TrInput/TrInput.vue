<template>
  <div class="tr-input">
    <div v-if="$slots.prepend" class="tr-input__prepend">
      <slot name="prepend" />
    </div>

    <div class="tr-input__box">
      <div class="tr-input__container">
        <input v-model="currentModelValue" :placeholder="label" />
      </div>
    </div>

    <div v-if="$slots.append" class="tr-input__append">
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: string | number | null
  label: string | null
}>()

const emit = defineEmits<{
  (e: 'update:model-value', v: string | number | null): void
}>()

const currentModelValue = useVModel(props, 'modelValue', emit)
</script>

<style lang="scss" src="./TrInput.scss"></style>
