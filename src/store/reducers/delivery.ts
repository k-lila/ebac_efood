import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Delivery } from '../../utils/types'

const initialState: Delivery = {
  receiver: '',
  address: {
    description: '',
    city: '',
    zipCode: '',
    number: 0,
    complement: ''
  }
}
const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    registerDelivery: (state, action: PayloadAction<Delivery>) => {
      return action.payload
    }
  }
})

export const { registerDelivery } = deliverySlice.actions
export default deliverySlice.reducer
