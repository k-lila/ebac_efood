import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RestauranteApi } from '../../utils/types'

const initialState: RestauranteApi[] = []

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    atualizar: (state, action: PayloadAction<RestauranteApi[]>) => {
      return action.payload
    }
  }
})

export const { atualizar } = apiSlice.actions
export default apiSlice.reducer
