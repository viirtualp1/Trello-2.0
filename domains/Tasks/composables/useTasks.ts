import { type TaskType, useTasksStore } from '@/domains/Tasks'

export function useTasks() {
  const tasksStore = useTasksStore()

  const tasks = computed(() => tasksStore.tasks)

  return {
    tasks,
    setTasks: (tasks: TaskType[]) => tasksStore.setTasks(tasks),
    generateTasks: (byWeekdays: boolean) =>
      tasksStore.generateTasks(byWeekdays),
  }
}
