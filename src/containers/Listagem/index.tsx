import { useGetFeaturedInfoQuery } from '../../services/api'
import Restaurante from '../../components/Restaurante'
import { Container } from './styles'
import Loader from '../../components/Loader'

const Listagem = () => {
  const restaurantes = useGetFeaturedInfoQuery().data
  return (
    <Container>
      {restaurantes ? (
        restaurantes.map((restaurante) => {
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
      ) : (
        <div style={{ gridColumn: '2 span', backgroundColor: 'transparent' }}>
          <Loader red />
        </div>
      )}
    </Container>
  )
}

export default Listagem
