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

    <tr-divider class="sidebar-filters__divider" />

    <tr-list-item class="sidebar-filters__new-task">
      <img src="@/assets/icons/plus.svg" width="24" height="24" alt="plus" />

      Добавить задачу
    </tr-list-item>
  </div>
</template>

<script lang="ts" setup>
import { TrListItem, TrDivider } from '@/domains/UI'
import { useFilters } from '../'

const { currentFilter, filters, setFilter } = useFilters()
</script>

<style lang="scss" src="./SidebarFilters.scss"></style>
