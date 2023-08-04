import IconifyIcon from '@/core/components/icon'
import { Progress } from '@/core/components/progress'
import CustomToolTip from '@/core/components/tooltip'
import StatusColor from '@/services/common/statusColor'
import { Avatar, AvatarGroup, Box, Typography, linearProgressClasses, useTheme } from '@mui/material'

const ScrumboardCardContent = ({ data }: any) => {
  const theme = useTheme()
  const color = StatusColor(data.status)
  return (
    <Box sx={{ mx: 1 }}>
      <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          sx={theme => ({
            backgroundColor: color,
            py: 1,
            px: 2,
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.primary.contrastText,
            borderRadius: '50px'
          })}
        >
          {data.status}
        </Typography>
        <Box>
          <CustomToolTip
            title='Cài đặt'
            icon='dashicons:admin-tools'
            statusColor={data.status}
            sx={{ mr: 2 }}
            onClick={() => console.log('ok')}
          />
          <CustomToolTip
            title='Thành viên'
            icon='fluent-mdl2:group'
            statusColor={data.status}
            sx={{ mr: 2 }}
            onClick={() => console.log('ok')}
          />
          <CustomToolTip title='Sửa' icon='mdi:edit' statusColor={data.status} onClick={() => console.log('ok')} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
        <IconifyIcon icon='ic:round-date-range' fontSize={24} color={color} />
        <Typography sx={{ fontSize: 12, ml: 2 }}>{`${data.begin_time} - ${data.end_time}`}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
        <IconifyIcon icon='entypo:progress-one' fontSize={24} color={color} />
        <Progress
          variant='determinate'
          value={data.progress}
          sx={{
            height: 12,
            width: 140,
            mx: 2,
            [`& .${linearProgressClasses.bar}`]: {
              backgroundColor: color
            }
          }}
        ></Progress>
        <Typography sx={{ fontSize: 12, ml: 2 }}>{`${data.progress}%`}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          my: 1,
          position: 'absolute',
          bottom: '0.5rem',
          width: 250,
          height: 36
        }}
      >
        <AvatarGroup max={4} sx={{ '.MuiAvatar-root': { width: 36, height: 36 } }}>
          <Avatar alt='avatar_1' src='/images/default_avatar.png' />
          <Avatar alt='avatar_2' src='/images/default_avatar.png' />
          <Avatar alt='avatar_3' src='/images/default_avatar.png' />
          <Avatar alt='avatar_4' src='/images/default_avatar.png' />
          <Avatar alt='avatar_5' src='/images/default_avatar.png' />
        </AvatarGroup>
        <IconifyIcon
          icon='solar:star-bold-duotone'
          color={theme.palette.yellow.dark}
          style={{ position: 'absolute', right: 0 }}
        />
      </Box>
    </Box>
  )
}

export default ScrumboardCardContent
