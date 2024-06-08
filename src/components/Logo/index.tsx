import { LogoStyled } from './styles'
import logo from '../../assets/Logos/logo.png'

const Logo = () => {
  return (
    <LogoStyled>
      <img src={logo} alt="logo" />
    </LogoStyled>
  )
}

export default Logo
