import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { atualizar } from '../../store/reducers/api'
import Apresentacao from '../../components/Apresentacao'
import Header from '../../components/Header'
import Produtos from '../../containers/Produtos'
import Modal from '../../components/Modal'

const Perfil = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => dispatch(atualizar(res)))
  }, [dispatch])
  const modal = useSelector((state: RootReducer) => state.modal)
  return (
    <>
      <Header />
      <Apresentacao />
      <Produtos />
      {modal.open ? <Modal /> : null}
    </>
  )
}

export default Perfil
