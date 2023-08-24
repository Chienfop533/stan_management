import dayjs from 'dayjs'

const formatDate = (prop: any) => {
  return dayjs(prop).format('DD/MM/YYYY')
}

const formatDateTime = (prop: any) => {
  return dayjs(prop).format('hh:mm:ss DD/MM/YYYY')
}

const convertDate = (prop: any) => {
  return prop.toDate()
}

const currentMillisecond = () => {
  return dayjs().valueOf().toString()
}

const currentDateTimeString = () => {
  return dayjs().format('hh:mm:ss DD/MM/YYYY')
}

export { formatDate, formatDateTime, convertDate, currentMillisecond, currentDateTimeString }
