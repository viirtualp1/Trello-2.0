<template>
  <div class="tr-col">
    <slot name="header" />

    <div class="tr-col__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" src="./TrCol.scss"></style>
