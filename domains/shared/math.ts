export function getRandomNumber(min: number, max: number) {
  if (min === undefined || max === undefined) {
    return 0
  }

  return Math.floor(min + Math.random() * (max + 1 - min))
}
