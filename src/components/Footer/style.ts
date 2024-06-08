import styled from 'styled-components'
import Cores from '../../styles/cores'

export const Footer = styled.footer`
  background-color: ${Cores.bege2};
  height: 298px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-top: 32.5px;
  li {
    background-color: ${Cores.bege2};
    a {
      display: flex;
      align-items: center;
      margin: 0 4px;
      height: 24px;
      width: 24px;
      img {
        background-color: ${Cores.bege2};
      }
    }
  }
`
export const Quote = styled.p`
  font-size: 10px;
  width: 480px;
  text-align: center;
  background-color: transparent;
  color: ${Cores.vermelho};
  margin-top: 80px;
`
