<template>
  <div class="container content main-page">
    <button class="main-page__side-bar" @click="openSideMenu">
      <img src="@/assets/icons/menu.svg" />
    </button>
    <app-sidebar />

    <div class="main-page__content">
      <task-mobile-filters />

      <div class="main-page__tasks">
        <tr-col v-for="(weekday, weekdayIdx) in weekdays" :key="weekdayIdx">
          <template #header>{{ weekday.textContent }}</template>

          <div
            v-if="!tasks[weekday.text] || tasks[weekday.text].length === 0"
            class="main-page__tasks-empty"
          >
            Нет задач
          </div>
          <template v-else>
            <tr-task
              v-for="(task, taskIdx) in tasks[weekday.text]"
              :key="taskIdx"
            >
              <template #title> {{ task.title }} </template>

              <template #text>
                {{ task.text }}
              </template>
            </tr-task>
          </template>
        </tr-col>
      </div>
    </div>
    <Sidebar v-model:visible="visible">
      <p>Dota 2 - Beta</p>
      <button class="main-page__sidebar-button" @click="">
        <img src="@/assets/icons/calendar.svg" />Календарь
      </button>
      <button class="main-page__sidebar-button" @click="">
        <img src="@/assets/icons/edit.svg" />Заметки
      </button>
      <button class="main-page__sidebar-button" @click="">
        <img src="@/assets/icons/tasks.svg" />Задачи
      </button>
    </Sidebar>
  </div>
</template>

<script setup lang="ts">
import { AppSidebar } from '@/components/App'
import { TrCol, TrTask } from '@/components/UI'
import { TaskMobileFilters } from '@/components/TaskMobileFilters'
import Sidebar from 'primevue/sidebar'

const visible = ref(false)

const weekdays = computed(() => [
  { text: 'monday', textContent: 'понедельник' },
  { text: 'tuesday', textContent: 'вторник' },
  { text: 'wednesday', textContent: 'среда' },
  { text: 'thursday', textContent: 'четверг' },
  { text: 'friday', textContent: 'пятница' },
  { text: 'saturday', textContent: 'суббота' },
  { text: 'sunday', textContent: 'воскресенье' },
])

const tasks = computed(() => {
  return {
    monday: [
      {
        title: 'Задание #1',
        text: 'Это описание задания номер один. Нужно сделать тырыпыры',
      },
      {
        title: 'Задание #2',
        text: 'Это описание задания номер два. Нужно сделать чикипибарум',
      },
      {
        title: 'Задание #3',
        text: 'Это описание задания номер три. Нужно сделать шаламбалум',
      },
    ],
    tuesday: [
      {
        title: 'Задание #4',
        text: 'Это описание задания номер четыре. Нужно сделать карамбарам',
      },
    ],
  }
})

function openSideMenu() {
  visible.value = true
}
</script>

<style lang="scss" src="./MainPage.scss"></style>
