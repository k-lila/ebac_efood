import { useDispatch, useSelector } from 'react-redux'
import Logo from '../Logo'
import * as S from './styles'
import { RootReducer } from '../../store'
import { setCart } from '../../store/reducers/modalCart'

const Header = () => {
  const carrinho = useSelector((state: RootReducer) => state.carrinho.items)
  const dispatch = useDispatch()

  return (
    <S.Cabecalho>
      <Logo />
      <S.Line>
        <S.Restaurantes to="/">Restaurantes</S.Restaurantes>
        <span
          onClick={() => dispatch(setCart(true))}
        >{`${carrinho.length} produto(s) no carrinho`}</span>
      </S.Line>
    </S.Cabecalho>
  )
}

export default Header
