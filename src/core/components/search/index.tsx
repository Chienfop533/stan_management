import { IconButton, InputAdornment, OutlinedInput, OutlinedInputProps } from '@mui/material'
import IconifyIcon from '../icon'
import { MouseEventHandler } from 'react'
interface SearchProps {
  handleClickSearch: MouseEventHandler<HTMLButtonElement> | undefined
}
const Search = (props: OutlinedInputProps & SearchProps) => {
  const { sx, handleClickSearch, ...rest } = props
  return (
    <OutlinedInput
      placeholder='Tìm kiếm...'
      sx={{
        width: '100%',
        maxWidth: 350,
        height: 45,
        display: 'flex',
        borderRadius: '50px',
        backgroundColor: theme => theme.palette.background.paper,
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme => theme.palette.primary.main
        },
        ...sx
      }}
      endAdornment={
        <InputAdornment position='end'>
          <IconButton
            edge='end'
            onClick={handleClickSearch}
            sx={theme => ({
              backgroundColor: `${theme.palette.primary.main}`,
              width: 35,
              height: 35,
              marginRight: '-8px',
              '&:hover.MuiIconButton-root': { backgroundColor: 'primary.dark' }
            })}
          >
            <IconifyIcon icon='wpf:search' fontSize={20} color='white' />
          </IconButton>
        </InputAdornment>
      }
      {...rest}
    />
  )
}

export default Search
