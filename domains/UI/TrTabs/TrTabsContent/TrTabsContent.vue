<template>
  <div class="tr-tabs-content">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useTabs } from '@/domains/UI'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', v: string | number): void
}>()

const { activeTab, setActiveTab } = useTabs(props, emit)
</script>
