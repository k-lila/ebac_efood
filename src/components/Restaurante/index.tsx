import * as S from './styles'
import estrela from '../../assets/Imagens/star_favorite.png'

type Props = {
  id: number
  imagem: string
  titulo: string
  descricao: string
  nota: number
  categoria: string
  destaque?: boolean
}

const Restaurante = (props: Props) => {
  const getDescricao = (des: string) => {
    return des.length > 245 ? des.slice(0, 245) + '...' : des
  }

  return (
    <S.Container>
      <S.Imagem>
        <img src={props.imagem} alt="Foto do restaurante" />
      </S.Imagem>
      <S.Descricao>
        <S.Titulo>
          <p>{props.titulo}</p>
          <p>
            {props.nota} <img src={estrela} alt="Estrela de favorito" />
          </p>
        </S.Titulo>
        <S.Texto>{getDescricao(props.descricao)}</S.Texto>
        <S.SaibaMais to={`/perfil/${props.id}`}>Saiba mais</S.SaibaMais>
      </S.Descricao>
      <S.Faixa>
        {props.destaque ? <span>Destaque da semana</span> : null}
        <span>{props.categoria}</span>
      </S.Faixa>
    </S.Container>
  )
}

export default Restaurante
