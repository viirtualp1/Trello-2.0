<template>
  <div v-if="currentFilter === FilterType.ALL" class="tasks-all">
    <tr-col v-for="(tasks, tasksIdx) in chunkedTasks" :key="tasksIdx">
      <tr-task v-for="(task, taskIdx) in tasks" :key="taskIdx">
        <template #title> {{ task.title }} </template>

        {{ task.text }}
      </tr-task>
    </tr-col>
  </div>
</template>

<script setup lang="ts">
import { chunk } from 'lodash-es'
import { FilterType, useFilters } from '@/domains/Filters'
import { TrCol, TrTask } from '@/domains/UI'
import { useTasks } from '@/domains/Tasks'

const { currentFilter } = useFilters()
const { tasks: tasksFromStore, generateTasks } = useTasks()

onMounted(() => {
  generateTasks(false)
})

const chunkedTasks = computed(() => chunk(tasksFromStore.value, 3))
</script>

<style lang="scss" src="./TasksAll.scss"></style>
