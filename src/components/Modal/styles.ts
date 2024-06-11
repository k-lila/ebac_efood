import styled from 'styled-components'
import Cores from '../../styles/cores'

export const Background = styled.div`
  background-color: black;
  position: fixed;
  z-index: 1;
  opacity: 0.8;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
export const Modal = styled.div`
  position: fixed;
  z-index: 2;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1024px;
  height: 344px;
  background-color: ${Cores.vermelho};
  color: ${Cores.branco};
  display: grid;
  grid-template-columns: 280px auto;
  padding: 32px;
`

export const Close = styled.button`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  img {
    background-color: transparent;
  }
`

export const Foto = styled.div`
  height: 280px;
  width: 280px;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`
export const Info = styled.div`
  background-color: transparent;
  height: 100%;
  margin-left: 24px;
  h2,
  p {
    background-color: transparent;
  }
  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
  }
`

export const Adicionar = styled.button`
  padding: 4px 7px;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  color: ${Cores.vermelho};
  background-color: ${Cores.bege2};
  cursor: pointer;
`
