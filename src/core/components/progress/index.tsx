import { LinearProgress, linearProgressClasses, styled } from '@mui/material'

export const Progress = styled(LinearProgress)(({ theme }) => ({
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.success.main : theme.palette.success.dark
  }
}))
