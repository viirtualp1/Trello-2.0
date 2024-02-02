<template>
  <Sidebar
    ref="appSidebarRef"
    v-model:visible="currentIsVisible"
    :position="sidebarPosition"
    header="Trello 2.0"
  >
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
  </Sidebar>
</template>

<script setup lang="ts">
import { lock, unlock } from 'tua-body-scroll-lock'
import { useVModel } from '@vueuse/core'
import { useBreakpoints } from '@/domains/UI'
import Sidebar from 'primevue/sidebar'
import { TrListItem } from '@/domains/UI'
import { TrDivider } from '@/domains/UI'
import HomeIcon from '@/assets/icons/home.svg'
import CalendarIcon from '@/assets/icons/calendar.svg'
import NotesIcon from 'assets/icons/notes.svg'
import TasksIcon from '@/assets/icons/tasks.svg'
import { TrButton } from '~/domains/UI'

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

const appSidebarRef = ref<HTMLElement | null>(null)

watch(
  () => currentIsVisible.value,
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
