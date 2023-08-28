import { configureStore } from '@reduxjs/toolkit'
import scrumboardReducer from './scrumboardSlice'

export const store = configureStore({
  reducer: {
    scrumboard: scrumboardReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
