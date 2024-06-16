import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { setCart } from '../../store/reducers/modalCart'
import { registerDelivery } from '../../store/reducers/delivery'
import * as S from './styles'
import { Container, Aside, Cart, Button } from '../Carrinho/styles'
import ReactInputMask from 'react-input-mask'

const Entrega = () => {
  const dispatch = useDispatch()

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
      cep: Yup.string()
        .min(9)
        .max(9)
        .matches(/^\d{5}-\d{3}$/),
      numero: Yup.string()
        .matches(/^\d{2}$/)
        .required()
    }),
    validateOnMount: true,
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
              <ReactInputMask
                type="text"
                id="cep"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                mask="99999-999"
              />
            </S.FormItem>
            <S.FormItem style={{ width: '155px' }}>
              <label htmlFor="numero">Número</label>
              <ReactInputMask
                type="text"
                id="numero"
                name="numero"
                value={form.values.numero}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                mask="99"
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
          <Button
            type="submit"
            style={{ marginTop: '16px' }}
            disabled={!form.isValid}
          >
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
