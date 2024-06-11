import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setModal } from '../../store/reducers/modal'
import * as S from './styles'

type Props = {
  id: number
  foto: string
  nome: string
  descricao: string
}

const Produto = (props: Props) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const restaurante = id ? parseInt(id) : -1
  const handleClick = () => {
    dispatch(
      setModal({
        open: true,
        restaurante: restaurante,
        receita: props.id
      })
    )
  }

  return (
    <>
      <S.Card>
        <S.Imagem>
          <img src={props.foto} alt="Imagem de uma pizza" />
        </S.Imagem>
        <S.Texto>
          <h3>{props.nome}</h3>
          <p>{props.descricao}</p>
        </S.Texto>
        <S.Adicionar onClick={handleClick}>Adicionar ao carrinho</S.Adicionar>
      </S.Card>
    </>
  )
}

export default Produto
