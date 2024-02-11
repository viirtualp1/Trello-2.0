import { defineStore } from 'pinia'
import { FilterType } from '@/domains/Filters'

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    filter: FilterType.WEEK as FilterType,
  }),

  actions: {
    setFilter(filter: FilterType) {
      this.filter = filter
    },
  },
})
