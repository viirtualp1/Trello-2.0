<template>
  <div class="sidebar-filters">
    <div class="sidebar-filters__title">Задачи</div>

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

<script lang="ts" setup>
import { TrListItem } from '@/domains/UI'
import { useFilters } from '../'

const { currentFilter, filters, setFilter } = useFilters()
</script>

<style lang="scss" src="./SidebarFilters.scss"></style>
