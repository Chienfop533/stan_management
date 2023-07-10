// ** Icon Imports
import { Icon, IconProps } from '@iconify/react'

const IconifyIcon = ({ icon, ...rest }: IconProps) => {
  return <Icon icon={icon} fontSize='2rem' {...rest} />
}

export default IconifyIcon
