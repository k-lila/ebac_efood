import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './reducers/api'
import modalReducer from './reducers/modal'
const store = configureStore({
  reducer: {
    api: apiReducer,
    modal: modalReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
