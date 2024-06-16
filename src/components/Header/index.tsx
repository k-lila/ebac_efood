import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setCart } from '../../store/reducers/modalCart'
import * as S from './styles'
import Logo from '../Logo'

const Header = () => {
  const carrinho = useSelector((state: RootReducer) => state.carrinho.items)
  const dispatch = useDispatch()

  return (
    <S.Cabecalho>
      <Logo />
      <S.Line>
        <S.Restaurantes to="/">Restaurantes</S.Restaurantes>
        <span
          onClick={() =>
            dispatch(
              setCart({
                open: true,
                delivery: false,
                payment: false,
                conclude: false
              })
            )
          }
        >{`${carrinho.length} produto(s) no carrinho`}</span>
      </S.Line>
    </S.Cabecalho>
  )
}

export default Header
