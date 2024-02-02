<template>
  <div class="tr-sidebar" :class="[{ 'is-open': isOpen }, position]">
    <div class="tr-sidebar__overlay"></div>
    <div class="tr-sidebar__content">
      <div class="tr-sidebar__header">
        <slot name="header" />

        <tr-button class="tr-sidebar__close" theme="ghost" icon @click="hide">
          <img
            src="@/assets/icons/close.svg"
            alt="close"
            width="20"
            height="20"
          />
        </tr-button>
      </div>

      <div class="tr-sidebar__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSidebar } from '@/domains/App'
import { TrButton } from '~/domains/UI'

defineProps({
  position: {
    type: String as PropType<'right' | 'left'>,
    default: 'left',
  },
})

const { isOpen, hide } = useSidebar()
</script>

<style lang="scss" src="./TrSidebar.scss"></style>
