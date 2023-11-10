import { configureStore } from '@reduxjs/toolkit'
// ...
import  CardsReducer  from '../slices/cardSlice'
import  CardV2Reducer from '../slices/v2Slice'
export const store = configureStore({
  reducer: {
    cards: CardsReducer,
    cardV2: CardV2Reducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch