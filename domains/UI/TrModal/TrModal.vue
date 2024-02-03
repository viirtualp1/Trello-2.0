<template>
  <Teleport to="body">
    <div class="tr-modal" :class="{ 'is-open': isOpen }">
      <div
        class="tr-modal__dialog"
        tabindex="-1"
        role="dialog"
        :aria-popup="isOpen"
      >
        <div class="tr-modal__wrapper" :style="`max-width: ${maxWidth}px`">
          <div class="tr-modal__overlay" @click="close"></div>
          <div class="tr-modal__container">
            <tr-button
              class="tr-modal__close-button"
              theme="ghost"
              icon
              @click="close"
            >
              <img
                src="@/assets/icons/close.svg"
                alt="close"
                width="16"
                height="16"
              />
            </tr-button>

            <div class="tr-modal__header">
              <div class="tr-modal__title">
                <slot name="title" />
              </div>
            </div>
            <div class="tr-modal__content">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { TrButton } from '@/domains/UI'

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    type: Number,
    default: null,
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits({
  close: () => true,
})

function close() {
  emit('close')
}
</script>

<style lang="scss" src="./TrModal.scss"></style>
