import './Inicio.css'

function Inicio() {

    return (
        <div className="titulo">
            <h1>P.I.T.E.R PROJECT - Introdução ao projeto</h1>
            <h2>O que é?</h2>
            <p>
                É uma plataforma web para monitoramento e análise de atos públicos municipais relacionados à adoção de tecnologias no contexto educacional, utilizando dados do projeto Querido Diário. 
            </p>
            <h2>Objetivo</h2>
            <p>
                O foco desta aplicação está em esclarecer à população brasileira o valor dos investimentos municipais e estaduais em tecnologia e inovação escolar, em que está sendo investido esse dinheiro, e o rankings para comparar quais municípios e estados investem mais.
            </p>
            <h2>Como o projeto está sendo desenvolvido?</h2>
            <p>
                Aplica-se a ferramenta "Querido Diário". Nela, estão disponíveis dados de diários oficiais municipais e estaduais relacionados ao foco citado no tópico Objetivo. 
            </p>

            <div className='linking'>
                <h2>Como posso acessar essa ferramenta?</h2>
                <p>
                    <a href='/rotas_menu/Aplic.js'>Clique aqui</a>
                </p>
            </div>
        </div>
    );

}

export default Inicio;