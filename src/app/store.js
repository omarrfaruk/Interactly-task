import { configureStore } from '@reduxjs/toolkit'
import routingReducer  from '../features/routingSlice'

export const store = configureStore({
  reducer: {
    routing:routingReducer
  },
})