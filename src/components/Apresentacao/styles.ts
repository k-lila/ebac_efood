import styled from 'styled-components'
import Cores from '../../styles/cores'

export const Container = styled.div`
  position: relative;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p,
  h2 {
    font-size: 32px;
    margin-left: 170px;
    z-index: 1;
    background-color: transparent;
    color: ${Cores.branco};
  }
  p {
    margin-top: 24px;
    font-weight: 100;
  }
  h2 {
    font-weight: 900;
    margin-bottom: 32px;
  }
`

export const Fundo = styled.div`
  z-index: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url('./italiana.png');
  filter: brightness(50%);
  background-position: center;
  background-size: 100% auto;
`
