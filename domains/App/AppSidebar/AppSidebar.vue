<template>
  <tr-sidebar ref="appSidebarRef" :position="sidebarPosition">
    <template #header> Trello 2.0 </template>

    <tr-list-item
      v-for="(sidebarButton, idx) in sidebarButtons"
      :key="idx"
      class="app-sidebar__button"
    >
      <img :src="sidebarButton.icon" alt="calendar" width="20" height="20" />

      {{ sidebarButton.text }}
    </tr-list-item>

    <tr-divider />

    <div class="app-sidebar__auth">
      <p>Войдите, чтобы использовать все возможности Trello 2.0</p>

      <tr-button>Войти</tr-button>
    </div>
  </tr-sidebar>
</template>

<script setup lang="ts">
import { lock, unlock } from 'tua-body-scroll-lock'
import { useSidebar } from '@/domains/App'
import {
  TrListItem,
  TrButton,
  TrDivider,
  TrSidebar,
  useBreakpoints,
} from '@/domains/UI'

import HomeIcon from '@/assets/icons/home.svg'
import CalendarIcon from '@/assets/icons/calendar.svg'
import NotesIcon from 'assets/icons/notes.svg'
import TasksIcon from '@/assets/icons/tasks.svg'

const { isOpen } = useSidebar()
const { greater } = useBreakpoints()

const appSidebarRef = ref<HTMLElement | null>(null)

watch(
  () => isOpen.value,
  (v: boolean) => {
    return v ? lock(appSidebarRef.value) : unlock(appSidebarRef.value)
  },
)

const sidebarPosition = computed(() => {
  return greater('lg').value ? 'left' : 'right'
})

const sidebarButtons = computed(() => [
  {
    text: 'Главная',
    icon: HomeIcon,
  },
  {
    text: 'Календарь',
    icon: CalendarIcon,
  },
  {
    text: 'Заметки',
    icon: NotesIcon,
  },
  {
    text: 'Задачи',
    icon: TasksIcon,
  },
])
</script>

<style lang="scss" src="./AppSidebar.scss"></style>
