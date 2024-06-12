import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ModalCart = {
  open: boolean
}

const initialState: ModalCart = {
  open: false
}

const cartSlice = createSlice({
  name: 'modalCart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload
    }
  }
})

export const { setCart } = cartSlice.actions
export default cartSlice.reducer
