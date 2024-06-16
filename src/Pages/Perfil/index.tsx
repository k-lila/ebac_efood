import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Apresentacao from '../../components/Apresentacao'
import Header from '../../components/Header'
import Produtos from '../../containers/Produtos'
import Modal from '../../components/Modal'
import Carrinho from '../../containers/Carrinho'
import Entrega from '../../containers/Entrega'
import Pagamento from '../../containers/Pagamento'
import Realizado from '../../containers/Realizado'

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
      {cart.delivery ? <Entrega /> : null}
      {cart.payment ? <Pagamento /> : null}
      {cart.conclude ? <Realizado /> : null}
    </>
  )
}

export default Perfil
