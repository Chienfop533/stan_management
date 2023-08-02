import { ComponentsPropsList, Theme } from '@mui/material'

interface OwnerStateThemeType {
  theme: Theme
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] & Record<string, unknown>
}
const iconButton = () => {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          '&.MuiIconButton-root': {
            color: theme.palette.text.primary
          }
        })
      }
    }
  }
}

export default iconButton
