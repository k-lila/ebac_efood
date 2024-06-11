import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Restaurante from '../../components/Restaurante'
import { Container } from './styles'

const Listagem = () => {
  const restaurantes = useSelector((state: RootReducer) => state.api)
  return (
    <Container>
      {restaurantes.map((restaurante) => {
        return (
          <Restaurante
            key={restaurante.id}
            id={restaurante.id}
            imagem={restaurante.capa}
            titulo={restaurante.titulo}
            descricao={restaurante.descricao}
            nota={restaurante.avaliacao}
            categoria={restaurante.tipo}
            destaque={restaurante.destacado}
          />
        )
      })}
    </Container>
  )
}

export default Listagem
