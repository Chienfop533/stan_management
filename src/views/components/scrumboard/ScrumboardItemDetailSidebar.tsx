import IconifyIcon from '@/core/components/icon'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { Box, Button, List, ListSubheader, Typography, styled } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ButtonAddToCard = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'row',
  gap: '0.75rem',
  width: '100%',
  justifyContent: 'flex-start',
  marginBottom: '0.5rem',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.mode == 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
  '&:hover': {
    backgroundColor: theme.palette.mode == 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
  }
}))

const ScrumboardItemDetailSidebar = () => {
  const { t } = useTranslation()
  const listAddToCard = [
    { icon: 'formkit:people', title: 'member' },
    { icon: 'mingcute:tag-line', title: 'labels' },
    { icon: 'pajamas:clock', title: 'expire_date' },
    { icon: 'eva:attach-fill', title: 'attachments' },
    { icon: 'mdi:checkbox-marked-outline', title: 'checklist' }
  ]
  const listAction = [
    { icon: 'grommet-icons:link-next', title: 'move' },
    { icon: 'solar:copy-outline', title: 'copy' },
    { icon: 'mingcute:delete-2-fill', title: 'delete' }
  ]
  return (
    <Box>
      <List
        sx={{
          position: 'relative',
          '& ul': { padding: 0 }
        }}
        subheader={<li />}
      >
        <li key={`add-to-card`}>
          <ul>
            <ListSubheader sx={{ backgroundColor: 'transparent', padding: 0 }}>{t('add_to_card')}</ListSubheader>
            {listAddToCard.map(item => (
              <ButtonAddToCard key={item.title}>
                <IconifyIcon icon={item.icon} fontSize={20} />
                <Typography variant='h4' sx={{ textTransform: 'none' }}>
                  {t(item.title)}
                </Typography>
              </ButtonAddToCard>
            ))}
          </ul>
          <ul>
            <ListSubheader sx={{ backgroundColor: 'transparent', padding: 0 }}>{t('actions')}</ListSubheader>
            {listAction.map(item => (
              <ButtonAddToCard
                key={item.title}
                sx={theme => ({
                  color: item.title == 'delete' ? theme.palette.error.main : '',
                  backgroundColor: item.title == 'delete' ? hexToRGBA(theme.palette.error.light, 0.1) : '',
                  '&:hover': {
                    backgroundColor: item.title == 'delete' ? hexToRGBA(theme.palette.error.light, 0.2) : ''
                  }
                })}
              >
                <IconifyIcon icon={item.icon} fontSize={20} />
                <Typography variant='h4' sx={{ textTransform: 'none' }}>
                  {t(item.title)}
                </Typography>
              </ButtonAddToCard>
            ))}
          </ul>
        </li>
      </List>
    </Box>
  )
}

export default ScrumboardItemDetailSidebar
