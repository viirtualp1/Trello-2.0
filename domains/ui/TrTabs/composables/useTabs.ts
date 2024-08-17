import { provide, ref, watch } from 'vue'

interface TabsProps {
  modelValue: string | number
}

export function useTabs(
  props: TabsProps,
  emit: (e: 'update:modelValue', v: string | number) => void,
) {
  const activeTab = ref(props.modelValue)

  watch(
    () => props.modelValue,
    (value) => {
      activeTab.value = value
    },
  )

  function setActiveTab(value: string | number) {
    activeTab.value = value
    emit('update:modelValue', value)
  }

  provide('activeTab', activeTab)
  provide('setActiveTab', setActiveTab)

  return {
    activeTab,
    setActiveTab,
  }
}
