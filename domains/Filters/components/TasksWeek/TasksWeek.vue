<template>
  <div v-if="currentFilter === FilterType.WEEK && tasks" class="tasks-week">
    <tr-col v-for="(weekday, weekdayIdx) in weekdays" :key="weekdayIdx">
      <template #header>{{ weekday.name }}</template>

      <template v-for="(task, taskIdx) in tasks" :key="taskIdx">
        <tr-task v-if="task.weekday === weekday.type">
          <template #title> {{ task.title }} </template>

          {{ task.text }}
        </tr-task>
      </template>
    </tr-col>
  </div>
</template>

<script setup lang="ts">
import { TrCol, TrTask } from '@/domains/UI'
import { FilterType, useFilters } from '@/domains/Filters'
import { useTasks, weekdays } from '@/domains/Tasks'

const { currentFilter } = useFilters()
const { tasks, generateTasks } = useTasks()

onMounted(() => {
  generateTasks(true)
})
</script>

<style lang="scss" src="./TasksWeek.scss"></style>
