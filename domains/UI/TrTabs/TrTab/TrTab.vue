<template>
  <tr-button
    class="tr-tab"
    :class="classes"
    @click="() => setActiveTab?.(modelValue)"
  >
    <slot />
  </tr-button>
</template>

<script setup lang="ts">
import { TrButton } from '@/domains/UI'

interface Props {
  modelValue: string | number
}

const props = defineProps<Props>()

const activeTab = inject<Ref<string | number>>('activeTab')
const setActiveTab = inject<(value: string | number) => void>('setActiveTab')

const classes = computed(() => ({
  'is-active': activeTab && props.modelValue === activeTab.value,
}))
</script>

<style lang="scss" src="./TrTab.scss"></style>
