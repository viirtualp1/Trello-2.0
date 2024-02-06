<template>
  <tr-sidebar ref="appSidebarRef" :position="sidebarPosition">
    <template #header> Trello 2.0 </template>

    <tr-list-item
      v-for="(sidebarButton, idx) in sidebarButtons"
      :key="idx"
      :to="sidebarButton.link"
      :is-active="sidebarButton.isActive"
      class="app-sidebar__button"
    >
      <img :src="sidebarButton.icon" alt="calendar" width="20" height="20" />

      {{ sidebarButton.text }}
    </tr-list-item>

    <tr-divider />

    <div class="app-sidebar__auth">
      <p>Войдите, чтобы использовать все возможности Trello 2.0</p>

      <tr-button @click="open">Войти</tr-button>
    </div>
  </tr-sidebar>

  <auth-modal :is-open="isModalOpen" @close="close" />
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import { lock, unlock } from 'tua-body-scroll-lock'
import { useSidebar } from '@/domains/App'
import {
  TrListItem,
  TrButton,
  TrDivider,
  TrSidebar,
  useBreakpoints,
  useModal,
} from '@/domains/UI'
import { AuthModal } from '@/domains/Auth'

import HomeIcon from '@/assets/icons/home.svg'
import CalendarIcon from '@/assets/icons/calendar.svg'
import NotesIcon from 'assets/icons/notes.svg'
import TasksIcon from '@/assets/icons/tasks.svg'

const route = useRoute()
const { isOpen } = useSidebar()
const { greater } = useBreakpoints()
const { isOpen: isModalOpen, open, close } = useModal()

const appSidebarRef = ref<HTMLElement | null>(null)

watch(
  () => isOpen.value,
  (v: boolean | undefined) => {
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
    link: '/',
    isActive: route.name === 'index',
  },
  {
    text: 'Календарь',
    icon: CalendarIcon,
    link: '/calendar',
    isActive: route.name === 'calendar',
  },
  {
    text: 'Заметки',
    icon: NotesIcon,
    link: '/notes',
    isActive: route.name === 'notes',
  },
  {
    text: 'Задачи',
    icon: TasksIcon,
    link: '/tasks',
    isActive: route.name === 'tasks',
  },
])
</script>

<style lang="scss" src="./AppSidebar.scss"></style>
