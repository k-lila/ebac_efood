import * as S from './styles'

const Produto = () => {
  return (
    <S.Card>
      <S.Imagem>
        <img src="./pizza.png" alt="Imagem de uma pizza" />
      </S.Imagem>
      <S.Texto>
        <h3>Pizza Marguerita</h3>
        <p>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </p>
      </S.Texto>
      <S.Adicionar>Adicionar ao carrinho</S.Adicionar>
    </S.Card>
  )
}

export default Produto
