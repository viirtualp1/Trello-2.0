import { FilterType, useFiltersStore } from '@/domains/Filters'

export function useFilters() {
  const filtersStore = useFiltersStore()

  const currentFilter = computed(() => filtersStore.filter)

  const filters = [
    {
      type: FilterType.ALL,
      text: 'Все',
    },
    {
      type: FilterType.WEEK,
      text: 'На неделю',
    },
  ]

  return {
    currentFilter,
    filters,
    setFilter: filtersStore.setFilter,
  }
}
