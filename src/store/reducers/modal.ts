import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ModalState = {
  open: boolean
  restaurante: number
  receita: number
}

const initialState: ModalState = {
  open: false,
  restaurante: -1,
  receita: -1
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<ModalState>) => {
      return action.payload
    }
  }
})

export const { setModal } = modalSlice.actions
export default modalSlice.reducer
