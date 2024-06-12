import Restaurante from '../../components/Restaurante'
import { Container } from './styles'
import { useGetFeaturedInfoQuery } from '../../services/api'

const Listagem = () => {
  const restaurantes = useGetFeaturedInfoQuery().data
  return (
    <Container>
      {restaurantes
        ? restaurantes.map((restaurante) => {
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
          })
        : null}
    </Container>
  )
}

export default Listagem
