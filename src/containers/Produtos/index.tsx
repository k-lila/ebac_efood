import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Produto from '../../components/Produto'
import * as S from './style'

const Produtos = () => {
  const { id } = useParams()
  const restaurantes = useSelector((state: RootReducer) => state.api)
  const restaurante = restaurantes.find((res) => `${res.id}` === id)
  const getDescricao = (des: string) => {
    return des.length > 150 ? des.slice(0, 150) + '...' : des
  }

  return (
    <S.Container>
      {restaurante
        ? restaurante.cardapio.map((receita) => {
            return (
              <Produto
                key={receita.id}
                id={receita.id}
                foto={receita.foto}
                nome={receita.nome}
                descricao={getDescricao(receita.descricao)}
              />
            )
          })
        : null}
    </S.Container>
  )
}

export default Produtos
