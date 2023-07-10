import { ComponentsPropsList, Theme } from '@mui/material'

interface OwnerStateThemeType {
  theme: Theme
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] & Record<string, unknown>
}
const input = () => {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '&.Mui-focused': {
            color: theme.palette.success.main
          },
          '&.Mui-error': {
            color: theme.palette.error.main
          }
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.success.main
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main
          }
        })
      }
    }
  }
}

export default input
