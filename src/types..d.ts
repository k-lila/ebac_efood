declare type ReceitaApi = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type RestauranteApi = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ReceitaApi[]
}

declare type Product = {
  id?: number
  price?: number
}

declare type Delivery = {
  receiver: string
  address: {
    description: string
    city: string
    zipCode: string
    number: number
    complement: string
  }
}

declare type Payment = {
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

declare type Order = {
  products: Product[]
  delivery: Delivery
  payment: Payment
}

declare type OrderId = {
  orderId: string
}
