import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: OrderId = {
  orderId: ''
}

const orderIdSlice = createSlice({
  name: 'orderId',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<OrderId>) => {
      return action.payload
    }
  }
})

export const { setOrder } = orderIdSlice.actions
export default orderIdSlice.reducer
