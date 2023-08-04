import IconifyIcon from '@/core/components/icon'
import { Progress } from '@/core/components/progress'
import CustomToolTip from '@/core/components/tooltip'
import { Avatar, AvatarGroup, Box, Typography, useTheme } from '@mui/material'

const ScrumboardCardContent = () => {
  const theme = useTheme()
  return (
    <Box>
      <Box sx={{ my: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          sx={theme => ({
            backgroundColor: theme.palette.turquoise.dark,
            py: 1,
            px: 2,
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.primary.contrastText,
            borderRadius: '50px'
          })}
        >
          Khởi tạo
        </Typography>
        <Box>
          <CustomToolTip
            title='Cài đặt'
            icon='dashicons:admin-tools'
            statusColor='init'
            sx={{ mr: 2 }}
            onClick={() => console.log('ok')}
          />
          <CustomToolTip
            title='Thành viên'
            icon='fluent-mdl2:group'
            statusColor='active'
            sx={{ mr: 2 }}
            onClick={() => console.log('ok')}
          />
          <CustomToolTip title='Sửa' icon='mdi:edit' statusColor='late' onClick={() => console.log('ok')} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
        <IconifyIcon icon='ic:round-date-range' fontSize={24} color={theme.palette.status.init} />
        <Typography sx={{ fontSize: 12, ml: 2 }}>10/05/2023 - 20/12/2023</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
        <IconifyIcon icon='entypo:progress-one' fontSize={24} color={theme.palette.status.init} />
        <Progress variant='determinate' value={20} sx={{ height: 12, width: 140, mx: 2 }}></Progress>
        <Typography sx={{ fontSize: 12, ml: 2 }}>0%</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 1 }}>
        <AvatarGroup max={4} sx={{ '.MuiAvatar-root': { width: 36, height: 36 } }}>
          <Avatar alt='avatar_1' src='/images/default_avatar.png' />
          <Avatar alt='avatar_2' src='/images/default_avatar.png' />
          <Avatar alt='avatar_3' src='/images/default_avatar.png' />
          <Avatar alt='avatar_4' src='/images/default_avatar.png' />
          <Avatar alt='avatar_5' src='/images/default_avatar.png' />
        </AvatarGroup>
        <IconifyIcon icon='solar:star-bold-duotone' color={theme.palette.yellow.dark} />
      </Box>
    </Box>
  )
}

export default ScrumboardCardContent
