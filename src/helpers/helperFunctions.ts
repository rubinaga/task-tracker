export function formatDate(dateSet: number) {
  const date = new Date(dateSet)

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()

  return `${day}.${month}.${year}`
}

export function formatTime(unixTime: number) {
  const date = new Date(unixTime * 1000)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`

  return formattedTime
}
