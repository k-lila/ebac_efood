import * as S from './styles'

type Props = {
  imagem: string
  titulo: string
  descricao: string
  nota: string
  categoria: string
  destaque?: boolean
}

const Restaurante = (props: Props) => {
  return (
    <S.Container>
      <S.Imagem>
        <img src={props.imagem} alt="Foto da receita" />
      </S.Imagem>
      <S.Descricao>
        <S.Titulo>
          <p>{props.titulo}</p>
          <p>
            {props.nota}{' '}
            <img src="star_favorite.png" alt="Estrela de favorito" />
          </p>
        </S.Titulo>
        <S.Texto>{props.descricao}</S.Texto>
        <S.SaibaMais to="/Perfil">Saiba mais</S.SaibaMais>
      </S.Descricao>
      <S.Faixa>
        {props.destaque ? <span>Destaque da semana</span> : null}
        <span>{props.categoria}</span>
      </S.Faixa>
    </S.Container>
  )
}

export default Restaurante
