import styled from 'styled-components'
import Cores from '../../styles/cores'

export const Container = styled.div`
  position: relative;
  height: 280px;
  display: flex;

  background-position: center;
  background-size: 100% auto;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1366px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: transparent;
    z-index: 1;
  }

  p,
  h2 {
    font-size: 32px;
    margin-left: 170px;
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
