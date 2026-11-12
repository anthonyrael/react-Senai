import { Link } from 'react-router-dom'
import './Card.css'
import icon from '../../assets/icones/user.svg'
import icon2 from '../../assets/icones/star.svg'

type CardProps = {
    Lagrande: string;
nome: string
descricao: string
valor: number
quantidadedeAvaliacoes: number
nota: number
}

function Card ({
    Lagrande,
    nome,
    descricao,
    valor,
    quantidadedeAvaliacoes,
    nota
}:CardProps){
return(<article className="prod_card">
    <figure>
        <img
            src={Lagrande}
            alt="foto do produto"
        />
    </figure>
    <h2>
        <Link to="/detalheProduto" >Le Grand Chocolat</Link>
    </h2>
    <p className="card_desc">
        {descricao}
    </p>
    <p className="card_rodape">
        <data value={valor}>R$ {valor} / kg</data>
        <span className="card_av">
        <img src={icon} alt="icone de usuarios" />
            <data value={quantidadedeAvaliacoes}>{quantidadedeAvaliacoes}</data>
            <img src={icon2} alt="icone de estrela" />
            <data value={nota}>{nota}</data>
        </span>
    </p>
</article>)



}
export default Card