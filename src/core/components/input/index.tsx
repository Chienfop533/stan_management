import { InputLabel, OutlinedInput, makeStyles, styled } from '@mui/material'

const InputStyled = styled(OutlinedInput)(({ theme }) => ({
  borderRadius: '10px',
  input: {
    padding: theme.spacing(4)
  }
}))

const Input = ({ ...rest }) => {
  return <InputStyled {...rest} />
}

export default Input
