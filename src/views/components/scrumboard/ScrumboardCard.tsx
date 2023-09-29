import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { Box, Card, CardContent, Divider, Typography, styled } from '@mui/material'
import Image from 'next/image'
import ScrumboardCardContent from './ScrumboardCardContent'
import StatusColor from '@/services/common/statusColor'
import { useRouter } from 'next/router'
import { ScrumboardType } from '@/types/ScrumboardType'
import { useAppSelector } from '@/hooks/redux'
import { Dispatch, SetStateAction, useEffect } from 'react'
import ScrumboardForm from './ScrumboardForm'
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
interface ScrumboardCardType {
  data: ScrumboardType
  setOpen: Dispatch<SetStateAction<boolean>>
  setScrumboardEdit: Dispatch<SetStateAction<ScrumboardType | undefined>>
}
const ScrumboardCard = ({ data, setOpen, setScrumboardEdit }: ScrumboardCardType) => {
  const color = StatusColor(data.status)
  const router = useRouter()
  const member = useAppSelector(state => state.scrumboard.member).filter(item => item.scrumboard_id == data.id)
  return (
    <CustomCard
      sx={{ boxShadow: `0px 0px 5px ${hexToRGBA(color, 0.1)}` }}
      onClick={() => router.push(`/manage/scrumboard/${data.id}`)}
    >
      <Box
        sx={{
          width: '100%',
          height: '60px',
          position: 'relative',
          borderRadius: '5px',
          overflow: 'hidden',
          backgroundImage: `url(${data.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: theme => theme.palette.background.default
        }}
      ></Box>

      <CardContent sx={{ padding: '0px !important' }}>
        <TypographyStyled
          variant='h3'
          sx={{
            fontSize: '16px',
            mt: 2,
            mb: 1,
            mx: 1,
            color: color
          }}
        >
          {data.title}
        </TypographyStyled>
        <TypographyStyled sx={{ fontSize: '12px', color: 'text.secondary', mb: 2, mx: 1 }}>
          {data.description}
        </TypographyStyled>
        <Divider />
        <ScrumboardCardContent data={data} member={member} setOpen={setOpen} setScrumboardEdit={setScrumboardEdit} />
      </CardContent>
    </CustomCard>
  )
}

export default ScrumboardCard
