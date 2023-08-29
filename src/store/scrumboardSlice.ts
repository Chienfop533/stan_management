import { ScrumboardMember, scrumboardData } from '@/data/ScrumboardData'
import { ScrumboardMemberType, ScrumboardType } from '@/types/ScrumboardType'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ScrumboardState {
  data: ScrumboardType[]
  member: ScrumboardMemberType[]
}

const initialState = {
  data: scrumboardData,
  member: ScrumboardMember
} as ScrumboardState

const scrumboardSlice = createSlice({
  name: 'scrumboard',
  initialState,
  reducers: {
    addScrumboard: (state, action: PayloadAction<ScrumboardType>) => {
      const newListScrumboard = [...state.data, action.payload]
      state.data = newListScrumboard
    },
    updateScrumboard: (state, action: PayloadAction<ScrumboardType>) => {
      const newListScrumboard = state.data.map(item => {
        if (item.id == action.payload.id) {
          return action.payload
        } else {
          return item
        }
      })
      state.data = newListScrumboard
    },
    deleteScrumboard: (state, action: PayloadAction<string>) => {
      const newListScrumboard = state.data.filter(item => item.id != action.payload)
      state.data = newListScrumboard
    }
  }
})
export const { addScrumboard, deleteScrumboard, updateScrumboard } = scrumboardSlice.actions
const scrumboardReducer = scrumboardSlice.reducer
export default scrumboardReducer
