import styled from 'styled-components'
import Cores from '../../styles/cores'
import italiana from '../../assets/Imagens/italiana.png'

export const Container = styled.div`
  position: relative;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  background-image: url(${italiana});
  background-position: center;
  background-size: 100% auto;

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

  &::after {
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }
`
