<template>
  <Teleport to="body">
    <aside class="tr-sidebar" :class="{ 'is-open': isOpen }" @click="hide">
      <transition name="fade">
        <div v-show="isOpen" class="tr-sidebar__overlay"></div>
      </transition>

      <transition :name="transitionName">
        <div
          v-show="isOpen"
          :class="position"
          role="dialog"
          tab-index="-1"
          aria-popup="true"
          class="tr-sidebar__dialog"
        >
          <div class="tr-sidebar__content">
            <div class="tr-sidebar__header">
              <slot name="header" />

              <tr-button
                class="tr-sidebar__close"
                theme="ghost"
                icon
                @click="hide"
              >
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
      </transition>
    </aside>
  </Teleport>
</template>

<script setup lang="ts">
import { useSidebar } from '@/domains/App'
import { TrButton } from '~/domains/UI'

const props = defineProps({
  position: {
    type: String as PropType<'right' | 'left'>,
    default: 'left',
  },
})

const { isOpen, hide } = useSidebar()

const transitionName = computed(() => {
  return props.position === 'left' ? 'slide-x-left' : 'slide-x-right'
})
</script>

<style lang="scss" src="./TrSidebar.scss"></style>
