import Logo from '../Logo'
import * as S from './styles'

const Header = () => {
  return (
    <S.Cabecalho>
      <Logo />
      <S.Line>
        <S.Restaurantes to="/">Restaurantes</S.Restaurantes>
        <span>{`${0} produto(s) no carrinho`}</span>
      </S.Line>
    </S.Cabecalho>
  )
}

export default Header
