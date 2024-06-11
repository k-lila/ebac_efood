import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setModal } from '../../store/reducers/modal'
import * as S from './styles'
import close from '../../assets/Imagens/close.svg'

const Modal = () => {
  const api = useSelector((state: RootReducer) => state.api)
  const modal = useSelector((state: RootReducer) => state.modal)
  const restauranteSelecionado = api.find((res) => res.id === modal.restaurante)
  const receitaSelecionada = restauranteSelecionado
    ? restauranteSelecionado.cardapio.find((rec) => rec.id === modal.receita)
    : null
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(setModal({ open: false, restaurante: -1, receita: -1 }))
  }
  const formatoPreco = (preco: number | undefined) => {
    if (preco) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(preco)
    } else {
      return -1
    }
  }

  return (
    <>
      <S.Background />
      <S.Modal>
        <S.Foto>
          <img src={receitaSelecionada?.foto} alt="Foto da receita" />
        </S.Foto>
        <S.Info>
          <h2>{receitaSelecionada?.nome}</h2>
          <p>
            {receitaSelecionada?.descricao}
            <br />
            <br />
            Serve: {receitaSelecionada?.porcao}
          </p>
          <S.Adicionar>
            Adicione ao carrinho - {formatoPreco(receitaSelecionada?.preco)}
          </S.Adicionar>
        </S.Info>
        <S.Close onClick={handleClose}>
          <img src={close} alt="Fechar modal" />
        </S.Close>
      </S.Modal>
    </>
  )
}

export default Modal
