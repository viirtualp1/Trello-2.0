<template>
  <div class="tr-col">
    <div class="tr-col__header">
      <slot name="header" />
    </div>

    <div class="tr-col__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" src="./TrCol.scss"></style>
