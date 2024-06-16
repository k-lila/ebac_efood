import { useParams } from 'react-router-dom'
import { useGetFeaturedInfoQuery } from '../../services/api'
import * as S from './styles'
import Loader from '../Loader'

const Apresentacao = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetFeaturedInfoQuery()

  const restaurante = data ? data.find((res) => `${res.id}` === id) : null
  return isLoading ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '280px',
        backgroundColor: 'transparent'
      }}
    >
      <Loader red />
    </div>
  ) : (
    <S.Container style={{ backgroundImage: `url(${restaurante?.capa})` }}>
      <div>
        <p>{restaurante?.tipo}</p>
        <h2>{restaurante?.titulo}</h2>
      </div>
    </S.Container>
  )
}

export default Apresentacao
