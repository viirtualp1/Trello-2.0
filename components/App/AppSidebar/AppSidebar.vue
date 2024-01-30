<template>
  <div class="app-sidebar">
    <h4>Все задачи</h4>
    <ul>
      <li v-for="(task, idx) in tasks" :key="idx">
        {{ task.name }}

        ({{ task.isCompleted ? "Готово" : "Не готово" }})
      </li>
    </ul>

    <h4>Выполненные задачи</h4>
    <ul>
      <li
        v-for="(completedTask, completedTaskIdx) in completedTasks"
        :key="completedTaskIdx"
      >
        {{ completedTask.name }}

        ({{ completedTask.isCompleted ? "Готово" : "Не готово" }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const tasks = ref([
  {
    name: "Задача 1",
    isCompleted: false,
  },
  {
    name: "Задача 2",
    isCompleted: true,
  },
]);

const completedTasks = computed(() => {
  return tasks.value.filter((task) => task.isCompleted);
});
</script>

<style lang="scss" src="./AppSidebar.scss"></style>
