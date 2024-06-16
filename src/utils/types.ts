export type ReceitaApi = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type RestauranteApi = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ReceitaApi[]
}

export type Product = {
  id?: number
  price?: number
}

export type Delivery = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement: string
  }
}

export type Payment = {
  card: {
    name: string
    number: string
    code: number
    expires: {
      month: number
      year: number
    }
  }
}

export type Order = {
  products: Product[]
  delivery: Delivery
  payment: Payment
}
