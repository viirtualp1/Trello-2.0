<template>
  <ul>
    <button @click="add">{{ count }}</button>

    <li v-for="(weekday, idx) in weekdays" :key="idx">
      {{ weekday }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
const count = ref(0);

function add() {
  count.value++;
}

const weekdays = ref(["monday", "tuesday", "wednesday", "thursday"]);
</script>
