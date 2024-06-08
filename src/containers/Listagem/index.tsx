import Restaurante from '../../components/Restaurante'
import { Container } from './styles'
import japonesa from '../../assets/Imagens/japonesa.png'
import italiana from '../../assets/Imagens/italiana.png'

const Listagem = () => {
  return (
    <Container>
      <Restaurante
        imagem={japonesa}
        titulo="Hioki Sushi"
        nota="4.9"
        descricao={
          'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.\n Experimente o Japão sem sair do lar com nosso delivery!'
        }
        categoria="Japonesa"
        destaque
      />
      <Restaurante
        imagem={italiana}
        titulo="La Dolce Vita Trattoria"
        nota="4.6"
        descricao={
          'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
        }
        categoria="Italiana"
      />
      <Restaurante
        imagem={italiana}
        titulo="La Dolce Vita Trattoria"
        nota="4.6"
        descricao={
          'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
        }
        categoria="Italiana"
      />
      <Restaurante
        imagem={italiana}
        titulo="La Dolce Vita Trattoria"
        nota="4.6"
        descricao={
          'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
        }
        categoria="Italiana"
      />
      <Restaurante
        imagem={italiana}
        titulo="La Dolce Vita Trattoria"
        nota="4.6"
        descricao={
          'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
        }
        categoria="Italiana"
      />
      <Restaurante
        imagem={italiana}
        titulo="La Dolce Vita Trattoria"
        nota="4.6"
        descricao={
          'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
        }
        categoria="Italiana"
      />
    </Container>
  )
}

export default Listagem
