import { styled } from '@mui/material'
import Link from 'next/link'

export const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontWeight: 600,
  color: theme.palette.primary.dark
}))
