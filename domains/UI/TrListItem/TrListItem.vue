<template>
  <component
    :is="componentName"
    :to="to"
    class="tr-list-item"
    :class="{ 'is-active': isActive }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  to?: string
  isActive?: boolean
}>()

const componentName = computed(() => {
  return props.to ? 'router-link' : 'div'
})
</script>

<style lang="scss" src="./TrListItem.scss"></style>
