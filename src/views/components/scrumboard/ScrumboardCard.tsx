import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { Card, CardContent, Divider, Typography, styled } from '@mui/material'
import Image from 'next/image'
import ScrumboardCardContent from './ScrumboardCardContent'
const CustomCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 275,
  minHeight: 325,
  borderRadius: '10px',
  padding: '0.75rem',
  cursor: 'pointer'
}))
const TypographyStyled = styled(Typography)({
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical'
})
const ScrumboardCard = () => {
  return (
    <CustomCard sx={theme => ({ boxShadow: `0px 0px 5px ${hexToRGBA(theme.palette.red.dark, 0.2)}` })}>
      <Image
        src='/images/scrumboard/1.jpg'
        alt='project_name'
        width={250}
        height={60}
        style={{ borderRadius: '10px', objectFit: 'cover', display: 'flex', margin: '0 auto' }}
        priority={true}
      />
      <CardContent sx={{ padding: '0px !important' }}>
        <TypographyStyled
          variant='h3'
          sx={{
            fontSize: '16px',
            mt: 2,
            mb: 1,
            mx: 1
          }}
        >
          Dự án xây dựng website Dự án xây dựng website website Dự án xây dựng website
        </TypographyStyled>
        <TypographyStyled sx={{ fontSize: '12px', color: 'text.secondary', mb: 2, mx: 1 }}>
          Xậy dựng website quản lý công việc, quản lý lịch trình và quản lý ghi chú
        </TypographyStyled>
        <Divider />
        <ScrumboardCardContent />
      </CardContent>
    </CustomCard>
  )
}

export default ScrumboardCard
