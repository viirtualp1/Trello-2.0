<template>
  <div v-show="isActive" class="tr-tab-window">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number
}
const props = defineProps<Props>()

const activeTab = inject<Ref<string | number>>('activeTab')

const isActive = computed(() => activeTab?.value === props.modelValue)
</script>
