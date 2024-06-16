import { PulseLoader } from 'react-spinners'
import styled from 'styled-components'
import Cores from '../../styles/cores'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

const Loader = (props: { red?: boolean }) => {
  return (
    <Container>
      <PulseLoader
        color={props.red ? Cores.vermelho : Cores.bege2}
        cssOverride={{ backgroundColor: 'transparent' }}
      />
    </Container>
  )
}

export default Loader
