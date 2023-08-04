import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { Box, Card, CardContent, Divider, Typography, styled } from '@mui/material'
import Image from 'next/image'
import ScrumboardCardContent from './ScrumboardCardContent'
import StatusColor from '@/services/common/statusColor'
const CustomCard = styled(Card)(({ theme }) => ({
  width: 275,
  height: 325,
  borderRadius: '10px',
  padding: '0.75rem',
  cursor: 'pointer',
  margin: '1rem 1.5rem',
  position: 'relative',
  [theme.breakpoints.down('lg')]: {
    margin: '1rem'
  }
}))
const TypographyStyled = styled(Typography)({
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical'
})

const ScrumboardCard = ({ data }: any) => {
  const color = StatusColor(data.status)
  return (
    <CustomCard sx={{ boxShadow: `0px 0px 5px ${hexToRGBA(color, 0.1)}` }}>
      <Image
        src={data.img}
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
          {data.title}
        </TypographyStyled>
        <TypographyStyled sx={{ fontSize: '12px', color: 'text.secondary', mb: 2, mx: 1 }}>
          {data.description}
        </TypographyStyled>
        <Divider />
        <ScrumboardCardContent data={data} />
      </CardContent>
    </CustomCard>
  )
}

export default ScrumboardCard
