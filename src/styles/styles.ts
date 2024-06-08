import styled, { createGlobalStyle } from 'styled-components'
import Cores from './cores'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${Cores.branco};
    font-family: "Roboto", sans-serif;
  }
`
export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  background-color: ${Cores.bege1};
`
