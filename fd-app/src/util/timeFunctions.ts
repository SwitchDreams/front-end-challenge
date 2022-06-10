
export function getPaddedTime(date : Date) {
  return date.getHours().toString().padStart(2, '0') + 'h' + date.getMinutes().toString().padStart(2, '0')
}

export function getWeekDay(weekDay: number) {
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

  return days[weekDay]
}