export enum WeekdayType {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
}

export interface TaskType {
  title: string
  text: string
  weekday: WeekdayType | null
}

export const weekdays = [
  { type: WeekdayType.MONDAY, name: 'понедельник' },
  { type: WeekdayType.TUESDAY, name: 'вторник' },
  { type: WeekdayType.WEDNESDAY, name: 'среда' },
  { type: WeekdayType.THURSDAY, name: 'четверг' },
  { type: WeekdayType.FRIDAY, name: 'пятница' },
  { type: WeekdayType.SATURDAY, name: 'суббота' },
  { type: WeekdayType.SUNDAY, name: 'воскресенье' },
]
