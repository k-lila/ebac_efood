import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { setCart } from '../../store/reducers/modalCart'
import { RootReducer } from '../../store'
import { setOrder } from '../../store/reducers/order'
import formatoPreco from '../../utils/formatoPreco'
import { Container, Aside, Cart, Button } from '../Carrinho/styles'
import * as S from '../Entrega/styles'
import ReactInputMask from 'react-input-mask'
import Loader from '../../components/Loader'

const Pagamento = () => {
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess, isError, isLoading }] =
    usePurchaseMutation()

  const carrinho = useSelector((state: RootReducer) => state.carrinho.items)
  const delivery = useSelector((state: RootReducer) => state.delivery)

  const produtos = carrinho.map((item) => {
    return {
      id: item.receitaId,
      price: item.preco
    }
  })

  const soma = carrinho
    .map((item) => item.preco)
    .reduce((a, b) => (a !== undefined ? a : 0) + (b !== undefined ? b : 0), 0)

  const form = useFormik({
    initialValues: {
      nomeCartao: '',
      numCartao: '',
      ccv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      nomeCartao: Yup.string().min(5).required(),
      numCartao: Yup.string()
        .matches(/^\d{4} \d{4} \d{4} \d{4}$/)
        .required(),
      ccv: Yup.string()
        .matches(/^\d{3}$/)
        .required(),
      mesVencimento: Yup.string()
        .matches(/^\d{2}$/)
        .required(),
      anoVencimento: Yup.string()
        .matches(/^\d{4}$/)
        .required()
    }),
    onSubmit: (values) => {
      const payment: Payment = {
        card: {
          name: values.nomeCartao,
          number: values.numCartao,
          code: Number(values.ccv),
          expires: {
            month: Number(values.mesVencimento),
            year: Number(values.anoVencimento)
          }
        }
      }
      const order: Order = {
        products: produtos,
        delivery: delivery,
        payment: payment
      }
      purchase(order)
    },
    validateOnMount: true
  })

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setOrder({ orderId: data.orderId }))
      dispatch(
        setCart({
          open: false,
          delivery: false,
          payment: false,
          conclude: true
        })
      )
      if (isError) {
        alert('Ocorreu um erro, por favor tente novamente.')
        dispatch(
          setCart({
            open: false,
            delivery: false,
            payment: false,
            conclude: false
          })
        )
      }
    }
  }, [isSuccess, isError, dispatch, data])

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
        {isLoading ? (
          <div style={{ height: '300px', backgroundColor: 'transparent' }}>
            <Loader />
          </div>
        ) : (
          <>
            <S.Form onSubmit={form.handleSubmit}>
              <h2>{`Pagamento - Valor a pagar ${formatoPreco(soma)}`}</h2>
              <S.FormItem>
                <label htmlFor="nomeCartao">Nome do cartão</label>
                <input
                  type="text"
                  id="nomeCartao"
                  name="nomeCartao"
                  value={form.values.nomeCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.FormItem>
              <S.Row>
                <S.FormItem style={{ width: '228px' }}>
                  <label htmlFor="numCartao">Número do cartão</label>
                  <ReactInputMask
                    type="text"
                    id="numCartao"
                    name="numCartao"
                    value={form.values.numCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="9999 9999 9999 9999"
                  />
                </S.FormItem>
                <S.FormItem style={{ width: '87px' }}>
                  <label htmlFor="ccv">CCV</label>
                  <ReactInputMask
                    type="text"
                    id="ccv"
                    name="ccv"
                    value={form.values.ccv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="999"
                  />
                </S.FormItem>
              </S.Row>
              <S.Row>
                <S.FormItem style={{ width: '155px' }}>
                  <label htmlFor="mesVencimento">Mês de vencimento</label>
                  <ReactInputMask
                    type="text"
                    id="mesVencimento"
                    name="mesVencimento"
                    value={form.values.mesVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="99"
                  />
                </S.FormItem>
                <S.FormItem style={{ width: '155px' }}>
                  <label htmlFor="anoVencimento">Ano de vencimento</label>
                  <ReactInputMask
                    type="text"
                    id="anoVencimento"
                    name="anoVencimento"
                    value={form.values.anoVencimento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask="9999"
                  />
                </S.FormItem>
              </S.Row>
              <Button
                type="submit"
                style={{ marginTop: '16px' }}
                disabled={!form.isValid}
              >
                Finalizar pagamento
              </Button>
            </S.Form>
            <Button
              onClick={() => {
                dispatch(
                  setCart({
                    open: false,
                    delivery: true,
                    payment: false,
                    conclude: false
                  })
                )
              }}
            >
              Voltar para a edição de endereço
            </Button>
          </>
        )}
      </Cart>
    </Container>
  )
}

export default Pagamento
