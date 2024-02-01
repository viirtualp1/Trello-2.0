export function useSidebar() {
  const isVisible = ref(false)

  function toggle() {
    isVisible.value = !isVisible.value
  }

  function open() {
    isVisible.value = true
  }

  function close() {
    isVisible.value = false
  }

  return {
    isVisible,
    toggle,
    open,
    close,
  }
}
