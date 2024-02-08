<template>
  <div class="tr-task">
    <div class="tr-task__title">
      <slot name="title" />
    </div>

    <div class="tr-task__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" src="./TrTask.scss"></style>
