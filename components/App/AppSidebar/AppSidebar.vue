<template>
  <div class="app-sidebar">
    <div class="app-sidebar__title">Задачи</div>

    <tr-button
      v-for="(filter, idx) in filters"
      :key="idx"
      :class="{ 'is-active': filter.type === currentFilter }"
      @click="setFilter(filter.type)"
    >
      {{ filter.text }}
    </tr-button>
  </div>
</template>

<script lang="ts" setup>
import { TrButton } from '@/components/UI/TrButton'

enum FilterType {
  ALL = 'all',
  WEEK = 'week',
}

const currentFilter = ref(FilterType.ALL)

const filters = [
  { text: 'Все', type: FilterType.ALL },
  { text: 'На неделю', type: FilterType.WEEK },
]

function setFilter(type: FilterType) {
  currentFilter.value = type
}
</script>

<style lang="scss" src="./AppSidebar.scss"></style>
