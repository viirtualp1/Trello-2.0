<template>
  <div class="container content main-page">
    <tr-button class="main-page__button-menu" icon @click="show">
      <img src="@/assets/icons/menu.svg" alt="menu" />
    </tr-button>

    <sidebar-filters class="main-page__sidebar" />

    <div class="main-page__content">
      <sidebar-filters class="main-page__content-sidebar" />

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

    <app-sidebar />
  </div>
</template>

<script setup lang="ts">
import { useSidebar, AppSidebar } from '@/domains/App'
import { TrCol, TrTask, TrButton } from '@/domains/UI'
import { SidebarFilters } from '@/domains/Filters'

const { show } = useSidebar()

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

useHead({
  title: 'Trello 2.0',
})
</script>

<style lang="scss" src="./MainPage.scss"></style>
