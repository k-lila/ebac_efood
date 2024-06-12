import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import formatoPreco from '../../utils/formatoPreco'
import { setCart } from '../../store/reducers/modalCart'
import lixeira from '../../assets/Imagens/lixeira.svg'
import { removeItem } from '../../store/reducers/carrinho'

const Carrinho = () => {
  const carrinho = useSelector((state: RootReducer) => state.carrinho.items)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(setCart(false))
  }

  const handleRemove = (id: number) => {
    dispatch(removeItem(id))
  }

  const soma = carrinho
    .map((item) => item.preco)
    .reduce((a, b) => (a !== undefined ? a : 0) + (b !== undefined ? b : 0), 0)

  return (
    <S.Container>
      <S.Background onClick={handleClose} />
      <S.Cart>
        {carrinho.length !== 0 ? (
          carrinho.map((item) => (
            <S.Item key={item.id}>
              <S.Imagem src={item.foto} alt="Foto da receita" />
              <div>
                <h2>{item.receita}</h2>
                <p>{formatoPreco(item.preco)}</p>
              </div>
              <S.Lixeira
                onClick={() => item.id !== undefined && handleRemove(item.id)}
                src={lixeira}
              />
            </S.Item>
          ))
        ) : (
          <S.SemItem>Carrinho vazio</S.SemItem>
        )}
        <S.Valor>
          <p>Valor total</p>
          <p>{formatoPreco(soma)}</p>
        </S.Valor>
        <S.Entrega>Continuar com a entrega</S.Entrega>
      </S.Cart>
    </S.Container>
  )
}

export default Carrinho
