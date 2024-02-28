import { configureStore } from '@reduxjs/toolkit'
import scrumboardReducer from './scrumboardSlice'
import systemReducer from './systemSlide'

export const store = configureStore({
  reducer: {
    scrumboard: scrumboardReducer,
    system: systemReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
