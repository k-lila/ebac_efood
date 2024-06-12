import { RootReducer } from '../../store'
import Apresentacao from '../../components/Apresentacao'
import Header from '../../components/Header'
import Produtos from '../../containers/Produtos'
import Modal from '../../components/Modal'
import { useSelector } from 'react-redux'
import Carrinho from '../../containers/Carrinho'

const Perfil = () => {
  const modal = useSelector((state: RootReducer) => state.modal)
  const cart = useSelector((state: RootReducer) => state.cart)
  return (
    <>
      <Header />
      <Apresentacao />
      <Produtos />
      {modal.open ? <Modal /> : null}
      {cart.open ? <Carrinho /> : null}
    </>
  )
}

export default Perfil
