import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import Image from 'next/image'

const BoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '60%',
  maxWidth: 600,
  m: 4,
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))
const AuthWrapper = () => {
  return (
    <BoxWrapper>
      <Image src='/images/stan_logo.svg' width={200} height={200} priority={true} alt='Stan logo' />
      <Typography variant='h1' sx={{ fontFamily: 'Bungee', color: 'turquoise.dark' }}>
        Stan Management
      </Typography>
      <Typography variant='h2' sx={{ m: 6 }}>
        ( Schedule, Task and Note )
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image src='/images/schedule.gif' width={50} height={50} alt='Schedule gif' />
        <Typography sx={{ fontSize: 18, marginLeft: 2 }}>
          <Typography component='span' variant='body2' sx={{ fontSize: 18 }}>
            Schedule:{' '}
          </Typography>
          Quản lý lịch trình công việc, lên kế hoạch thực hiện và quản lý, giám sát các hoạt động đã làm.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <Image src='/images/task.gif' width={50} height={50} alt='Schedule gif' />
        <Typography sx={{ fontSize: 18, marginLeft: 2 }}>
          <Typography component='span' variant='body2' sx={{ fontSize: 18 }}>
            Task:{' '}
          </Typography>
          Quản lý nội dung công việc, tạo bảng dự án, phân công và cập nhật tiến độ. Xây dựng luồng dự án, phân rã nhiệm
          vụ và thảo luận nội dung.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image src='/images/note.gif' width={50} height={50} alt='Schedule gif' />
        <Typography sx={{ fontSize: 18, marginLeft: 2 }}>
          <Typography component='span' variant='body2' sx={{ fontSize: 18 }}>
            Note:{' '}
          </Typography>
          Quản lý ghi chú, lưu trữ nội dung, lưu trữ tài liệu, đường dẫn và tạo thông báo nhắc nhở.
        </Typography>
      </Box>
    </BoxWrapper>
  )
}

export default AuthWrapper
