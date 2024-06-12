import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './reducers/modal'
import carrinhoReducer from './reducers/carrinho'
import cartReducer from './reducers/modalCart'

import api from '../services/api'

const store = configureStore({
  reducer: {
    modal: modalReducer,
    carrinho: carrinhoReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware)
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
