import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const Translate = (text: string) => {
  const { t } = useTranslation()
  return `${t(text)}`
}

export default Translate
