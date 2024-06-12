import { useParams } from 'react-router-dom'
import * as S from './styles'
import { useGetFeaturedInfoQuery } from '../../services/api'

const Apresentacao = () => {
  const { id } = useParams()
  const restaurantes = useGetFeaturedInfoQuery().data

  const restaurante = restaurantes
    ? restaurantes.find((res) => `${res.id}` === id)
    : null
  return (
    <S.Container style={{ backgroundImage: `url(${restaurante?.capa})` }}>
      <div>
        <p>{restaurante?.tipo}</p>
        <h2>{restaurante?.titulo}</h2>
      </div>
    </S.Container>
  )
}

export default Apresentacao
