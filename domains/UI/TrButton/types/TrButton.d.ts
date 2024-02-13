const TrButtonThemes = [
  'primary',
  'secondary',
  'white',
  'ghost',
  'success',
  'danger',
  'info',
  'accent',
] as const

type TrButtonAvailableTheme = (typeof TrButtonThemes)[number]

export { TrButtonThemes, TrButtonAvailableTheme }
