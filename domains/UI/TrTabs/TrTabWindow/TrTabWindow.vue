<template>
  <div class="tr-tabs-content">
    <div v-show="isActive">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
})

const activeTab = inject<Ref<string | number>>('activeTab')

const isActive = computed(() => activeTab?.value === props.modelValue)
</script>
