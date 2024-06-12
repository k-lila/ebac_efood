const formatoPreco = (preco: number | undefined) => {
  if (!preco) {
    preco = 0
  }
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export default formatoPreco
