import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { atualizar } from '../../store/reducers/api'
import Cabecalho from '../../components/Hero'
import Listagem from '../../containers/Listagem'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => dispatch(atualizar(res)))
  }, [dispatch])

  return (
    <>
      <Cabecalho />
      <Listagem />
    </>
  )
}

export default Home
