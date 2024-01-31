<template>
  <div class="container content main-page">
    <app-sidebar />

    <div class="main-page__tasks">
      <tr-col v-for="(weekday, weekdayIdx) in weekdays" :key="weekdayIdx">
        <template #header>{{ weekday }}</template>

        <tr-task v-for="(task, taskIdx) in tasks[weekday]" :key="taskIdx">
          <template #title> {{ task.title }} </template>

          <template #text>
            {{ task.text }}
          </template>
        </tr-task>
      </tr-col>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppSidebar } from '@/components/App'
import { TrCol, TrTask } from '@/components/UI'

const weekdays = computed(() => [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
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
  }
})
</script>

<style lang="scss" src="./MainPage.scss"></style>
