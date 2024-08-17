<template>
  <div class="container content main-page">
    <tr-button class="main-page__button-menu" icon @click="show">
      <img src="@/assets/icons/menu.svg" alt="menu" />
    </tr-button>

    <sidebar-filters class="main-page__sidebar" />

    <div class="main-page__content">
      <sidebar-filters class="main-page__content-sidebar" />

      <tasks-all />
      <tasks-week />
    </div>

    <app-sidebar />
  </div>
</template>

<script setup lang="ts">
import { useSidebar, AppSidebar } from '@/domains/App'
import { TrButton } from '@/domains/UI'
import { SidebarFilters, TasksWeek, TasksAll } from '@/domains/filters'

const { show } = useSidebar()

useHead({
  title: 'Trello 2.0',
})
</script>

<style lang="scss" src="./MainPage.scss"></style>
