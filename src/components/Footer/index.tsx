import Logo from '../Logo'
import * as S from './style'

import instagram from '../../assets/Logos/instagram.svg'
import facebook from '../../assets/Logos/facebook.svg'
import twitter from '../../assets/Logos/twitter.svg'

const Rodape = () => {
  return (
    <S.Footer>
      <Logo />
      <S.Links>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram logo" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook logo" />
          </a>
        </li>
        <li>
          <a href="https://www.x.com" target="_blank" rel="noreferrer">
            <img src={twitter} alt="Twitter logo" />
          </a>
        </li>
      </S.Links>
      <S.Quote>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Quote>
    </S.Footer>
  )
}

export default Rodape
