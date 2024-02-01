enum FilterType {
  ALL = 'all',
  WEEK = 'week',
}
export function useFilters() {
  const currentFilter = ref(FilterType.ALL)

  const filters = [
    { text: 'Все', type: FilterType.ALL },
    { text: 'На неделю', type: FilterType.WEEK },
  ]

  function setFilter(type: FilterType) {
    currentFilter.value = type
  }

  return {
    currentFilter,
    filters,
    setFilter,
  }
}
