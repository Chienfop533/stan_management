import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ScrumboardItemDetailDialog {
  open: boolean
  id: string | null
}
interface SystemState {
  scrumboardItemDetail: ScrumboardItemDetailDialog
}

const initialState = {
  scrumboardItemDetail: { open: false, id: null }
} as SystemState

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setScrumboardItemDetail: (state, action: PayloadAction<ScrumboardItemDetailDialog>) => {
      state.scrumboardItemDetail = action.payload
    }
  }
})
export const { setScrumboardItemDetail } = systemSlice.actions
const systemReducer = systemSlice.reducer
export default systemReducer
