import { ScrumboardMember, scrumboardData } from '@/data/ScrumboardData'
import { ScrumboardMemberType, ScrumboardType } from '@/types/ScrumboardType'
import { createSlice } from '@reduxjs/toolkit'

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
  reducers: {}
})
const scrumboardReducer = scrumboardSlice.reducer
export default scrumboardReducer
