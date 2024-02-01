<template>
  <Sidebar v-model:visible="currentIsVisible" :position="sidebarPosition">
    <p>Trello 2.0</p>

    <button
      v-for="(sidebarButton, idx) in sidebarButtons"
      :key="idx"
      class="main-page__sidebar-button"
    >
      <img :src="sidebarButton.icon" alt="calendar" />

      {{ sidebarButton.text }}
    </button>
  </Sidebar>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { useBreakpoints } from '@/domains/UI'
import Sidebar from 'primevue/sidebar'
import CalendarIcon from '@/assets/icons/calendar.svg'
import NotesIcon from 'assets/icons/notes.svg'
import TasksIcon from '@/assets/icons/tasks.svg'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits({
  'update:is-visible': (_v: boolean) => true,
})

const { greater } = useBreakpoints()
const currentIsVisible = useVModel(props, 'isVisible', emit)

const sidebarPosition = computed(() => {
  return greater('lg').value ? 'left' : 'right'
})

const sidebarButtons = computed(() => [
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
