import styled from 'styled-components'
import Cores from '../../styles/cores'

export const Form = styled.form`
  background-color: transparent;
  margin-bottom: 8px;
  h2,
  div,
  label {
    color: ${Cores.bege2};
    background-color: transparent;
  }
  input {
    background-color: ${Cores.bege2};
  }
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: 700;
  }
  column-gap: 34px;
`

export const FormItem = styled.div`
  margin-bottom: 8px;

  width: 100%;
  label {
    font-size: 14px;
    font-weight: 700;
  }
  input {
    color: ${Cores.preto};
    padding: 8px;
    width: 100%;
    border: none;
    font-size: 14px;
    font-weight: 700;
    margin-top: 8px;
  }
`

export const Row = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
`
