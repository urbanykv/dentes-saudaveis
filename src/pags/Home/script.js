import React from "react";
import './home.css'
import EstruturaPag from "../../components/estruturaPag/script";
import Card from "./cardAparelho/script";
import { Link } from "react-router-dom";


function Home(){
    return(
        <EstruturaPag>
            <div className="banner">
                <h1>Os melhores <span>aparelhos dentários</span>!</h1>
                <p>Confira abaixo todas as especialidades odontológicas que temos a sua disposição!</p>
                <div className="especialidades">
                    <div className="esp">
                        <img src={process.env.PUBLIC_URL + 'assets/dente.png'}/> <p>Pré-avaliação</p>
                    </div>
                    <div className="esp">
                        <img src={process.env.PUBLIC_URL + 'assets/dente.png'}/> <p>Aparelhos Dentários</p>
                    </div>
                </div>
                <div className="especialidades">
                    <div className="esp">
                        <img src={process.env.PUBLIC_URL + 'assets/dente.png'}/> <p>Raio-X Digital</p>
                    </div>
                    <div className="esp">
                        <img src={process.env.PUBLIC_URL + 'assets/dente.png'}/> <p>Clareamento dental</p>
                    </div>
                </div>
            </div>
            <div className="aparelho">
                <h1>Por que usar <span>aparelho</span>?</h1>
                <img src={process.env.PUBLIC_URL + 'assets/aparelho.png'} alt="Aparelho"/>
                <div className="cards">
                    <Card titulo='Alinhar os dentes' texto='Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.'/>
                    <Card titulo='Melhorar a dicção e a higiene dentária' texto='Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.'/>
                    <Card titulo='Corrigir espaço entre os dentes' texto='Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.'/>
                </div>
            </div>
            <div className="home-depoimentos">
                <h2 className="titulo-sessao">Veja o que nossos <b>clientes</b> estão falando...</h2>

                <ul className="lista-depoimentos">
                <li>
                    <img className="img-aparelho" src="assets/cliente01.png" alt="Cliente Alberto" title="Cliente Alberto"/>
                    <p>Alberto</p>
                    <p>Usei aparelho por 2 anos e agora posso sorrir novamente.</p>
                </li>

                <li>
                    <img className="img-aparelho" src="assets/cliente02.png" alt="Cliente Eliana" title="Cliente Eliana"/>
                    <p>Eliana</p>
                    <p>Meus dentes eram espaçados e depois de 1 ano estão no lugar certo.</p>
                </li>

                <li>
                    <img className="img-aparelho" src="assets/cliente03.png" alt="Cliente Carla" title="Cliente Carla"/>
                    <p>Carla</p>
                    <p>Começei a usar ano passado e já estou notando a diferença.</p>
                </li>
                </ul>
                <Link to='/contatos' className="contato">Entrar em contato</Link>
            </div>
        </EstruturaPag>
    )
}

export default Home