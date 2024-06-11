import Rodape from './components/Footer'
import { Container, GlobalStyle } from './styles/styles'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Rotas from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Rotas />
          <Rodape />
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
