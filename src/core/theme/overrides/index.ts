import MuiInput from './input'
import MuiIconButton from './iconButton'
const Overrides = () => {
  const input = MuiInput()
  const iconButton = MuiIconButton()
  return Object.assign(input, iconButton)
}
export default Overrides
