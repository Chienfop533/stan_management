import { Button, styled } from '@mui/material'

export const ActionButtonStyled = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'row',
  gap: '0.75rem',
  justifyContent: 'center',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.mode == 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
  '&:hover': {
    backgroundColor: theme.palette.mode == 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
  }
}))
