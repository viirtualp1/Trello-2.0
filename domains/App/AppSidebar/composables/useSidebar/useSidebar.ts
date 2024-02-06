import { useSidebarStore } from '../../store'

export function useSidebar() {
  const sidebarStore = useSidebarStore()
  const { show, hide, setIsOpen } = sidebarStore

  const isOpen = computed(() => sidebarStore.isOpen)

  function toggle() {
    if (isOpen.value === undefined || isOpen.value === true) {
      hide()
    } else {
      show()
    }
  }

  return {
    isOpen,
    toggle,
    show,
    hide,
    setIsOpen,
  }
}
