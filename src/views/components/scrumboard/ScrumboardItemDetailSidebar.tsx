import { ActionButtonStyled } from '@/core/components/action-button'
import IconifyIcon from '@/core/components/icon'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { Box, List, ListSubheader, Typography, styled } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ScrumboardItemDetailSidebar = () => {
  const { t } = useTranslation()
  const listAddToCard = [
    { icon: 'formkit:people', title: 'member' },
    { icon: 'mingcute:tag-line', title: 'labels' },
    { icon: 'pajamas:clock', title: 'dates' },
    { icon: 'eva:attach-fill', title: 'attachments' },
    { icon: 'mdi:checkbox-marked-outline', title: 'checklist' }
  ]
  const listAction = [
    { icon: 'grommet-icons:link-next', title: 'move' },
    { icon: 'solar:copy-outline', title: 'copy' },
    { icon: 'mingcute:delete-2-fill', title: 'delete' }
  ]
  return (
    <Box sx={{ width: 'calc(100% - 550px)' }}>
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
              <ActionButtonStyled
                key={item.title}
                sx={{ marginBottom: '0.5rem', width: '100%', justifyContent: 'flex-start' }}
              >
                <IconifyIcon icon={item.icon} fontSize={20} />
                <Typography variant='h4' sx={{ textTransform: 'none' }}>
                  {t(item.title)}
                </Typography>
              </ActionButtonStyled>
            ))}
          </ul>
          <ul>
            <ListSubheader sx={{ backgroundColor: 'transparent', padding: 0 }}>{t('actions')}</ListSubheader>
            {listAction.map(item => (
              <ActionButtonStyled
                key={item.title}
                sx={theme => ({
                  marginBottom: '0.5rem',
                  width: '100%',
                  justifyContent: 'flex-start',
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
              </ActionButtonStyled>
            ))}
          </ul>
        </li>
      </List>
    </Box>
  )
}

export default ScrumboardItemDetailSidebar
