import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setCart } from '../../store/reducers/modalCart'
import { removeItem } from '../../store/reducers/carrinho'
import formatoPreco from '../../utils/formatoPreco'
import * as S from './styles'
import lixeira from '../../assets/Imagens/lixeira.svg'

const Carrinho = () => {
  const carrinho = useSelector((state: RootReducer) => state.carrinho.items)
  const dispatch = useDispatch()

  const soma = carrinho
    .map((item) => item.preco)
    .reduce((a, b) => (a !== undefined ? a : 0) + (b !== undefined ? b : 0), 0)

  return (
    <S.Container>
      <S.Aside
        onClick={() =>
          dispatch(
            setCart({
              open: false,
              delivery: false,
              payment: false,
              conclude: false
            })
          )
        }
      />
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
                onClick={() =>
                  item.id !== undefined && dispatch(removeItem(item.id))
                }
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
        <S.Button
          onClick={() => {
            dispatch(
              setCart({
                open: false,
                delivery: true,
                payment: false,
                conclude: false
              })
            )
          }}
          disabled={soma ? (soma === 0 ? true : false) : true}
        >
          Continuar com a entrega
        </S.Button>
      </S.Cart>
    </S.Container>
  )
}

export default Carrinho
