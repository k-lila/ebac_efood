import Logo from '../Logo'
import * as S from './style'

const Rodape = () => {
  return (
    <S.Footer>
      <Logo />
      <S.Links>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src="./instagram.svg" alt="Instagram logo" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src="./facebook.svg" alt="Facebook logo" />
          </a>
        </li>
        <li>
          <a href="https://www.x.com" target="_blank" rel="noreferrer">
            <img src="./twitter.svg" alt="Twitter logo" />
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
