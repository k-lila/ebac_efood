import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { setCart } from '../../store/reducers/modalCart'
import { Container, Aside, Cart, Button } from '../Carrinho/styles'
import { Finalizado } from './styles'

const Realizado = () => {
  const pedido = useSelector((state: RootReducer) => state.order)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleConcluir = () => {
    dispatch(
      setCart({ open: false, delivery: false, payment: false, conclude: false })
    )
    navigate('/')
    window.location.reload()
  }

  return (
    <Container>
      <Aside />
      <Cart>
        <Finalizado>
          <h2>Pedido realizado - {pedido.orderId}</h2>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
            <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
            <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button onClick={handleConcluir}>Concluir</Button>
        </Finalizado>
      </Cart>
    </Container>
  )
}

export default Realizado
