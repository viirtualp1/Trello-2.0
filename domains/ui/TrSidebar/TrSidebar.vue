<template>
  <Teleport to="body">
    <aside class="tr-sidebar" :class="{ 'is-open': isOpen }">
      <transition name="fade">
        <div v-show="isOpen" class="tr-sidebar__overlay"></div>
      </transition>

      <div
        v-show="isOpen"
        :class="`is-${position}`"
        role="dialog"
        tab-index="-1"
        aria-popup="true"
        class="tr-sidebar__dialog"
        @click="close"
      >
        <transition :name="transitionName">
          <div v-show="isOpen" class="tr-sidebar__container">
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
        </transition>
      </div>
    </aside>
  </Teleport>
</template>

<script setup lang="ts">
import { useSidebar } from '@/domains/App'
import { TrButton } from '@/domains/UI'

const props = defineProps<{
  position: 'right' | 'left'
}>()

const { isOpen, hide } = useSidebar()

function close(e: Event | null) {
  // TODO: О великий костыль (временный)
  if (
    !e ||
    !e.target ||
    !(e.target as HTMLElement).className.includes('tr-sidebar__dialog')
  ) {
    return
  }

  hide()
}

const transitionName = computed(() => {
  return props.position === 'left' ? 'slide-x-left' : 'slide-x-right'
})
</script>

<style lang="scss" src="./TrSidebar.scss"></style>
