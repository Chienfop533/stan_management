import IconifyIcon from '@/core/components/icon'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { Box, Button, List, ListSubheader, Typography, styled } from '@mui/material'
import React from 'react'

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
  const listAddToCard = [
    { icon: 'formkit:people', title: 'Thành viên' },
    { icon: 'mingcute:tag-line', title: 'Nhãn' },
    { icon: 'pajamas:clock', title: 'Ngày hết hạn' },
    { icon: 'eva:attach-fill', title: 'Đính kèm' },
    { icon: 'mdi:checkbox-marked-outline', title: 'Việc làm' }
  ]
  const listAction = [
    { icon: 'grommet-icons:link-next', title: 'Di chuyển' },
    { icon: 'solar:copy-outline', title: 'Sao chép' },
    { icon: 'mingcute:delete-2-fill', title: 'Xóa' }
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
            <ListSubheader sx={{ backgroundColor: 'transparent', padding: 0 }}>Thêm vào thẻ</ListSubheader>
            {listAddToCard.map(item => (
              <ButtonAddToCard key={item.title}>
                <IconifyIcon icon={item.icon} fontSize={20} />
                <Typography variant='h3' sx={{ textTransform: 'none', fontSize: '16px' }}>
                  {item.title}
                </Typography>
              </ButtonAddToCard>
            ))}
          </ul>
          <ul>
            <ListSubheader sx={{ backgroundColor: 'transparent', padding: 0 }}>Thao tác</ListSubheader>
            {listAction.map(item => (
              <ButtonAddToCard
                key={item.title}
                sx={theme => ({
                  color: item.title == 'Xóa' ? theme.palette.error.main : '',
                  backgroundColor: item.title == 'Xóa' ? hexToRGBA(theme.palette.error.light, 0.1) : '',
                  '&:hover': {
                    backgroundColor: item.title == 'Xóa' ? hexToRGBA(theme.palette.error.light, 0.2) : ''
                  }
                })}
              >
                <IconifyIcon icon={item.icon} fontSize={20} />
                <Typography variant='h3' sx={{ textTransform: 'none', fontSize: '16px' }}>
                  {item.title}
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
