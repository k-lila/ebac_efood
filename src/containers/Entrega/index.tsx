import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { setCart } from '../../store/reducers/modalCart'
import { registerDelivery } from '../../store/reducers/delivery'
import { Delivery } from '../../utils/types'
import * as S from './styles'
import { Container, Aside, Cart, Button } from '../Carrinho/styles'

const Entrega = () => {
  const dispatch = useDispatch()
  const [valid, setValid] = useState(false)

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string().min(5).required(),
      endereco: Yup.string().min(5).required(),
      cidade: Yup.string().min(2).required(),
      cep: Yup.string().min(9).max(9).required(),
      numero: Yup.string().min(1).max(3).required()
    }),
    onSubmit: (values) => {
      const delivery: Delivery = {
        receiver: values.nome,
        address: {
          description: values.endereco,
          city: values.cidade,
          zipCode: values.cep,
          number: Number(values.numero),
          complement: values.complemento
        }
      }
      dispatch(registerDelivery(delivery))
      dispatch(
        setCart({
          open: false,
          delivery: false,
          payment: true,
          conclude: false
        })
      )
    }
  })

  useEffect(() => {
    form.validateForm().then(() => {
      setValid(form.isValid)
    })
  }, [form.isValid])

  return (
    <Container>
      <Aside
        onClick={() => {
          dispatch(
            setCart({
              open: false,
              delivery: false,
              payment: false,
              conclude: false
            })
          )
        }}
      />
      <Cart>
        <S.Form onSubmit={form.handleSubmit}>
          <h2>Entrega</h2>
          <S.FormItem>
            <label htmlFor="nome">Quem irá receber</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={form.values.nome}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.FormItem>
          <S.FormItem>
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={form.values.endereco}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.FormItem>
          <S.FormItem>
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              value={form.values.cidade}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.FormItem>
          <S.Row>
            <S.FormItem style={{ width: '155px' }}>
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.FormItem>
            <S.FormItem style={{ width: '155px' }}>
              <label htmlFor="numero">Número</label>
              <input
                type="number"
                id="numero"
                name="numero"
                value={form.values.numero}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.FormItem>
          </S.Row>
          <S.FormItem>
            <label htmlFor="complemento">Complemento (opcional)</label>
            <input
              type="text"
              id="complemento"
              name="complemento"
              value={form.values.complemento}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.FormItem>
          <Button type="submit" style={{ marginTop: '16px' }} disabled={!valid}>
            Continuar com o pagamento
          </Button>
        </S.Form>
        <Button
          onClick={() => {
            dispatch(
              setCart({
                open: true,
                delivery: false,
                payment: false,
                conclude: false
              })
            )
          }}
        >
          Voltar para o carrinho
        </Button>
      </Cart>
    </Container>
  )
}

export default Entrega
