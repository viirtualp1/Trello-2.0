<template>
  <div class="tr-tabs-content">
    <div v-show="isActive">
      <slot />
    </div>
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
