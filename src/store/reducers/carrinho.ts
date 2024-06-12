import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CarrinhoItem = {
  id?: number
  receita?: string
  foto?: string
  preco?: number
}

type CarrinhoState = {
  items: CarrinhoItem[]
}

const initialState: CarrinhoState = {
  items: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionaItem: (state, action: PayloadAction<CarrinhoItem>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionaItem, removeItem } = carrinhoSlice.actions
export default carrinhoSlice.reducer
