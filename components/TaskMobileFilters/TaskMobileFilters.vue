<template>
  <div class="task-mobile-filters">
    <tr-list-item
      v-for="(filter, idx) in filters"
      :key="idx"
      :class="{ 'is-active': filter.type === currentFilter }"
      @click="setFilter(filter.type)"
    >
      {{ filter.text }}
    </tr-list-item>
  </div>
</template>

<script setup lang="ts">
import { useFilters } from '@/composables/useFilters'
import { TrListItem } from '~/components/UI'

const { currentFilter, filters, setFilter } = useFilters()
</script>

<style lang="scss" src="./TaskMobileFilters.scss"></style>
