import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useGetFeaturedInfoQuery } from '../../services/api'
import { setModal } from '../../store/reducers/modal'
import { adicionaItem } from '../../store/reducers/carrinho'
import { setCart } from '../../store/reducers/modalCart'
import formatoPreco from '../../utils/formatoPreco'
import * as S from './styles'
import close from '../../assets/Imagens/close.svg'

const getNewId = (lista_id: number[]) => {
  let newId = 0
  while (lista_id.includes(newId)) {
    newId++
  }
  return newId
}

const Modal = () => {
  const dispatch = useDispatch()
  const restaurantes = useGetFeaturedInfoQuery().data
  const modal = useSelector((state: RootReducer) => state.modal)
  const carrinho = useSelector((state: RootReducer) => state.carrinho.items)
  const restauranteSelecionado = restaurantes
    ? restaurantes.find((res) => res.id === modal.restaurante)
    : null
  const receitaSelecionada = restauranteSelecionado
    ? restauranteSelecionado.cardapio.find((rec) => rec.id === modal.receita)
    : null
  const handleClose = () => {
    dispatch(setModal({ open: false, restaurante: -1, receita: -1 }))
  }
  const handleAdicionar = () => {
    const lista_id = carrinho
      .map((car) => car.id)
      .filter((id): id is number => id !== undefined)
    dispatch(
      adicionaItem({
        id: getNewId(lista_id),
        receitaId: receitaSelecionada?.id,
        receita: receitaSelecionada?.nome,
        foto: receitaSelecionada?.foto,
        preco: receitaSelecionada?.preco
      })
    )
    handleClose()
    dispatch(
      setCart({ open: true, delivery: false, payment: false, conclude: false })
    )
  }

  return (
    <>
      <S.Background onClick={handleClose} />
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
          <S.Adicionar onClick={handleAdicionar}>
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
