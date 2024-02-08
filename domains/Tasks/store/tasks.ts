import { defineStore } from 'pinia'
import { type TaskType, weekdays } from '@/domains/Tasks'
import { getRandomNumber } from '@/domains/shared'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: undefined as TaskType[] | undefined,
  }),
  actions: {
    setTasks(tasks: TaskType[]) {
      this.tasks = tasks
    },
    generateTasks(byWeekdays: boolean) {
      const tasks = []

      for (let i = 0; i < 8; i++) {
        const weekdaysIdx = getRandomNumber(0, weekdays.length - 1)
        console.log(weekdaysIdx)

        tasks.push({
          title: `Задание #${i}`,
          text: `Это описание задание номер ${i}. Нужно сделать чикипибарум`,
          weekday: byWeekdays ? weekdays[weekdaysIdx].type : null,
        })
      }

      this.tasks = tasks
    },
  },
})
