import Rodape from './components/Footer'
import { Container, GlobalStyle } from './styles/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Perfil',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rotas} />
        <Rodape />
      </Container>
    </>
  )
}

export default App
