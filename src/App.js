/*import logo from './favicon.ico';*/
import './App.css';
import Inicio from './home_page/Inicio'
import Menu from './home_page/Menu'

function App() {
  return (
    <div className="App">
      <header>
        <div className="menu">
        <Menu />
        </div>
      </header>
      
      <main>
        <Inicio />
      </main>

      <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h4>P.I.T.E.R</h4>
            <p>Sua plataforma de pesquisa sobre investimentos municipais para tecnologia educacional</p>
          </div>

          <div class="footer-section">
            <h4>NAVEGAÇÃO</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="./Aplic.js">Aplicação</a></li>
              <li><a href="https://unb-mds.github.io/Projeto-P.I.T.E.R/">Sobre Nós/Documentos</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>CONTATO</h4>
            <ul>
              <li><a href="https://github.com/unb-mds/Projeto-P.I.T.E.R">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>📖 P.I.T.E.R - Pesquisador de Investimentos em Tecnologia para Educação</p>
          <p>Desenvolvido pelo Squad-2 do 25/2</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
