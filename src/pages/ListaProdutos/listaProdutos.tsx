
import './listaProdutos.css'
import Lagrande from '../../assets/img/produtos/le_grand_chocolat.png'

import Card from '../../components/card/Card'
import { useEffect, useState } from 'react'
import type { Produto } from '../../types/Produto'
import produtoService from '../../services/produtoService'
import { useSearchParams } from 'react-router-dom'

function ListaProdutos() {
const[produtos, setprodutos] = useState<Produto[]>([]);
const [erro, setErro] = useState('');
const [carregando, setCarregando] = useState(true);
const [parametros] = useSearchParams();
const busca = (parametros.get('q')??'').toLocaleLowerCase('pt-BR');
const categoria = Number(parametros.get('categoria'));


useEffect(() =>{
// Promise.call
    produtoService.listar()
        .then(lista => {setprodutos(lista), console.log(lista)})
    .catch(()=> setErro ("não foi possivel carregar os produtos!"))
    .finally(() => setCarregando(false))
}, [])

const visiveis = produtos.filter(produto => 
    produto.ativo&&
    (!categoria || produto.categoriaIds.includes(categoria))&&
    (!busca || `${produto.nome} ${produto.descricaoCurta}`.toLocaleLowerCase('pt-BR').includes(busca))
)

    return (
        <>
            
            <main>
                <section className="prod_banner" />
                <section className="container prod_container">
                    <div className="box_h2">
                        <h1>Nossos Bolos</h1>
                        <span>Nos Gâteaux</span>
                        <hr />
                    </div>
                    {carregando && <p> carregando produto...</p>}
                    {!carregando && !erro && produtos.length === 0 &&
                    <p>Nenhum produto encontrado.</p>}
                    <div className="prod_cards">
                      {visiveis.map(produto => { return <Card 
                      id={produto.id}
                      key={produto.id}
                        Lagrande={`http://localhost:3000${produto.imagem}`}
                         nome={produto.nome} 
                         descricao={produto.descricaoCurta}
                          valor={produto.precoPorKg}
                           quantidadedeAvaliacoes={10} 
                           nota={9.5}/>})}
                           
                        {/* <article className="prod_card">
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
                                
                            </p>
                            <p className="card_rodape">
                                <data value={185.0}>R$ 185,00 / kg</data>
                                <span className="card_av">
                                <img src={icon} alt="icone de usuarios" />
                                    <data value={10}>10</data>
                                    <img src={icon2} alt="icone de estrela" />
                                    <data value="9.5">9,5</data>
                                </span>
                            </p>
                        </article> */}
                    </div>
                </section>
            </main>

            
        </>
    )
}

export default ListaProdutos;