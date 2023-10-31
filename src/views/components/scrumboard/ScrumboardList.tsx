import IconifyIcon from '@/core/components/icon'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { Box, IconButton, Typography, styled } from '@mui/material'
import ScrumboardItem from './ScrumboardItem'
import { useTranslation } from 'react-i18next'

const ScrumboardListStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.mode == 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  borderRadius: '10px',
  border: '1px solid',
  borderColor: `${hexToRGBA(theme.palette.grey[500], 0.2)}`,
  padding: '5px',
  minHeight: '100px',
  maxHeight: '100%',
  display: 'flex',
  flex: '1 auto 1',
  flexDirection: 'column'
}))

const ScrumboardList = () => {
  const { t } = useTranslation()
  return (
    <ScrumboardListStyled>
      <Box sx={{ margin: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 600, fontSize: '16px', textTransform: 'uppercase' }}>
          Xây dựng giao diện
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              fontWeight: 500,
              width: 24,
              height: 24,
              backgroundColor: theme => theme.palette.gray.dark,
              borderRadius: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: theme => theme.palette.gray.light
            }}
          >
            4
          </Typography>
          <IconButton sx={{ padding: '2px 4px' }}>
            <IconifyIcon icon='circum:menu-kebab' fontSize={20} />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: 5,
          overflow: 'auto',
          position: 'relative'
        }}
      >
        <ScrumboardItem />
        <ScrumboardItem />
        <ScrumboardItem />
        <ScrumboardItem />
      </Box>
      <Box
        sx={{
          padding: '0.5rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          cursor: 'pointer',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: theme =>
              theme.palette.mode == 'light' ? theme.palette.grey[300] : theme.palette.grey[700]
          }
        }}
      >
        <IconifyIcon icon='gg:add' fontSize={24} />
        <Typography sx={{ fontWeight: 600, height: 24, fontSize: 16, ml: 2 }}>{t('add_another_card')}</Typography>
      </Box>
    </ScrumboardListStyled>
  )
}

export default ScrumboardList
