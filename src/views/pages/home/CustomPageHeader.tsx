import MediaQuery from '@/core/utils/media-query'
import HeaderTitle, { HeaderTitleProps } from '@/views/components/header/HeaderTitle'
import { Grid } from '@mui/material'
import { ReactNode } from 'react'
type HeaderProps = HeaderTitleProps & {
  children: ReactNode
}
const CustomPageHeader = (props: HeaderProps) => {
  const { type, icon, pageTitle, children } = props
  const tablet = MediaQuery().tablet

  const headerElement = () => {
    if (icon && type == 'mainPage') {
      return <HeaderTitle icon={icon} pageTitle={pageTitle} type={type} />
    } else if (type == 'subPage') {
      return <HeaderTitle pageTitle={pageTitle} type={type} />
    }
  }
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap' }}>
      {!tablet ? headerElement() : null}
      <Grid item container xs={12} md={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        {children}
      </Grid>
    </Grid>
  )
}

export default CustomPageHeader
