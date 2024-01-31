<template>
  <div class="tr-task">
    <div class="tr-task__title">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" src="./TrTask.scss"></style>
