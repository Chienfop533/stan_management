import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { Card, CardContent, Divider, Typography, styled } from '@mui/material'
import Image from 'next/image'
import scrumboard_1 from '@/assets/images/scrumboard_1.jpg'
import ScrumboardCardContent from './ScrumboardCardContent'
const CustomCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 275,
  minHeight: 325,
  borderRadius: '10px',
  padding: '1rem',
  [theme.breakpoints.down('md')]: {
    padding: '0.5rem'
  }
}))
const ScrumboardCard = () => {
  return (
    <CustomCard sx={theme => ({ boxShadow: `0px 0px 5px ${hexToRGBA(theme.palette.red.dark, 0.2)}` })}>
      <Image
        src={scrumboard_1}
        alt='project_name'
        style={{ width: '100%', height: '60px', objectFit: 'cover', borderRadius: '10px' }}
        priority={true}
      />
      <CardContent sx={{ padding: '0px !important' }}>
        <Typography variant='h3' sx={{ fontSize: '16px' }}>
          Dự án xây dựng website
        </Typography>
        <Typography sx={{ fontSize: '12px', color: 'text.secondary', mb: 2 }}>
          Xậy dựng website quản lý công việc, quản lý lịch trình và quản lý ghi chú
        </Typography>
        <Divider />
        <ScrumboardCardContent />
      </CardContent>
    </CustomCard>
  )
}

export default ScrumboardCard
