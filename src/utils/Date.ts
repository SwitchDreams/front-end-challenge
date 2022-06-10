export function formatDate(date: string): string {
  const unformatedDateString = new Date(date).toLocaleDateString()
  const unformatedDateArray = unformatedDateString.split('/')

  return `${unformatedDateArray[1]}/${unformatedDateArray[0]}/${unformatedDateArray[2]}`
}

export function formatTime(date: string): string {
  return new Date(date).toLocaleTimeString()
}

export function formatDuration(durationInSeconds: number): string {
  const hours = Math.floor(durationInSeconds / 3600)
  const minutes = Math.floor((durationInSeconds % 3600) / 60)
  const seconds = durationInSeconds - hours * 3600 - minutes * 60

  return [`${hours}h`, `${minutes}m`, `${seconds}s`]
    .filter((item) => item[0] !== '0')
    .join(' ')
}
