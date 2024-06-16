import styled from 'styled-components'
import Cores from '../../styles/cores'

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: end;
`
export const Aside = styled.aside`
  background-color: transparent;
  height: 100%;
  width: calc(100% - 360px);
`

export const Cart = styled.aside`
  background-color: ${Cores.vermelho};
  height: 100%;
  width: 360px;
  padding: 32px 8px;
  overflow-y: auto;
`

export const Item = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${Cores.bege2};
  color: ${Cores.vermelho};
  margin-bottom: 16px;
  padding: 8px;
  display: flex;
  position: relative;

  div {
    background-color: transparent;
    margin-left: 8px;
  }
  h2 {
    font-size: 18px;
    font-weight: 900;
    background-color: transparent;
  }
  p {
    background-color: transparent;
    margin-top: 16px;
  }
`

export const Imagem = styled.img`
  object-fit: cover;
  width: 80px;
  height: 80px;
`

export const Lixeira = styled.img`
  width: 16px;
  height: 16px;
  background-color: transparent;
  position: absolute;
  right: 8px;
  bottom: 8px;
  cursor: pointer;
`

export const Valor = styled.div`
  display: flex;
  background-color: transparent;
  font-size: 16px;
  justify-content: space-between;
  color: ${Cores.bege2};
  margin-top: 40px;
  margin-bottom: 16px;
  p {
    background-color: transparent;
  }
`

export const Button = styled.button`
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  height: 24px;
  border: none;
  cursor: pointer;
  background-color: ${Cores.bege2};
  color: ${Cores.vermelho};
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`
export const SemItem = styled.p`
  background-color: transparent;
  font-size: 16px;
  color: ${Cores.bege2};
  text-align: center;
`
