import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ModalCart = {
  open: boolean
  delivery: boolean
  payment: boolean
  conclude: boolean
}

const initialState: ModalCart = {
  open: false,
  delivery: false,
  payment: false,
  conclude: false
}

const cartSlice = createSlice({
  name: 'modalCart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<ModalCart>) => {
      return action.payload
    }
  }
})

export const { setCart } = cartSlice.actions
export default cartSlice.reducer
