import Header from "../../Componente/Header";
import { FaLinkedin, FaInstagram, FaGithub, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { FaGraduationCap, FaReact, FaBootstrap} from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoIosRocket } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import perfil from '../../assets/perfil2.jpeg';
import foto from '../../assets/foto.jpg';
import tarefas from '../../assets/tarefas.png';
import chamados from '../../assets/chamado .png';
import filmes from '../../assets/filme.png';
import landing from '../../assets/landigin.png';
import barbearia from '../../assets/barbearia.png';
import calculadora from '../../assets/calculadoraIMC.png';
import cardapio from '../../assets/cardapio.png';
import link from '../../assets/link.png';
import './home.css';
import { Link } from "react-router-dom";
import Footer from '../../Componente/Footer';
import whatsapp from "../../assets/whatsapp.svg";

const curriculumUrl = 'https://drive.google.com/file/d/1vq6WosUlE0MahoaKmrSBJaVOYnssfIgl/view';
export default function Home(){
  const downloadCurriculum = () => {
    window.open(curriculumUrl, '_blank');
};
    return(
        <>
            <Header/>
            <section className="inicio">
                <div>
                <img src={perfil} alt="minha imagem" />
                </div>
                <div className="bem-vindo">
                    <h1>Dev Software</h1>
                    <p>Oi sou a Sabrina Soares, sou desenvolvedora de software formada em Sistema de Informação.</p>
                    <p>Sejam bem vindos ao meu Portifólio</p>
                    <button onClick={downloadCurriculum}>Download Curriculo</button>
                </div>
                <div className="social">
                <Link to="https://www.instagram.com/sabrinams.9/" target="_blank"><FaInstagram size={25}  /></Link>
                <Link to="https://www.linkedin.com/in/sabrina-moreira-soares-caires/" target="_blank"><FaLinkedin size={25} /></Link>
                <Link to="https://github.com/SabrinaSoaresDev" target="_blank"><FaGithub size={25} /></Link>
                </div>
            </section>
            <section id="sobre">

            <h1 className="titulo">Sobre</h1>

              <div className="container-sobre">
                
                  <img src={foto} alt="Minha foto" className="foto-sobre" />
                <div className="texto-sobre">
                  <h3>Meu nome é Sabrina Soares!</h3>
                  <p>Tenho 26 anos, sou natural de Minas Gerais, nascida na cidade de Joaima, mas morando em Governador Valadares.</p>
                  <p>Profissional formada em Sistemas de Informação, com sólida experiência em análise de sistemas e suporte técnico. Conhecimento avançado em HTML, CSS, JavaScript e atualmente aprofundando em React. Comprometida com a excelência na execução de serviços, destacando-se pela capacidade de resolver problemas de forma ágil e eficiente, contribuindo para a otimização dos processos e satisfação dos clientes.</p>
                  <p>Segue abaixo algumas habilidades e projetos que realizei:</p>
                  <div className="formacao">
                    <div>
                      <FaGraduationCap size={25} />
                      <h4>Formação</h4>
                      <span>Sistemas de Informação</span>
                      <span>Concluído</span>
                    </div>
                    <div>
                      <IoIosRocket size={25} />
                      <h4>Cursos Complementares</h4>
                      <span>React Js do zero ao avançado na prática</span>
                      <span>Em Andamento</span>
                    </div>
                  </div>
                </div>
              </div>
</section>

        <section id="habilidades">
            <h1 className="titulo">Habilidades</h1>
            <div className="habilidades">

            <span>Linguagens</span>
            <ul>
                <li>
                <FaHtml5 size={80} color="#F16529" /> <p>HTML 5</p>
                </li>
                <li>
                <FaCss3Alt size={80} color="#FF9F1C" />  <p>CSS3</p>
                </li>
                <li>
                <IoLogoJavascript size={80} color="#F7DF1E" />  <p>Javascript</p>
                </li>
                <li>
                <FaReact size={80} color="#2E86C1" />  <p>React</p>
                </li>
                <li>
                <FaBootstrap size={80} color="#fff" />  <p>Bootstrap</p>
                </li>
                <li>
                <VscVscode size={80} color="#2e86c1" />  <p>Vs Code</p>
                </li>
                <li>
                <FaGitAlt size={80} color="#f00" />  <p>Github</p>
                </li>
                <li>
                <SiMysql size={80} color="#fff" />  <p>MySQL</p>
                </li>
            </ul>

            </div>
            </section>
            <section id="projetos" className="projetos">
            <h1 className="titulo">Projetos</h1>
               <div className="projetos-container">
              <img src={tarefas} alt="sistema de tarefas" className="projetos-img"  />
                <div className="projetos-content">
                    <h4>Lista de Tarefas</h4>
                    <p>Sistema de Gestão de Tarefas</p>
                    <Link to="https://tarefas-roan.vercel.app/" target="_blank">Visualizar</Link>
                    <Link to="https://github.com/SabrinaSoaresDev/Tarefas" target="_blank">Github</Link>
                </div>
            <div className="projetos-container">
              <img src={chamados} alt="sistema de chamado" className="projetos-img"  />
                <div className="projetos-content">
                    <h4>Gestão de Chamados</h4>
                    <p>Gestão de chamados onde é informado e registrado todos os chamados da empresa e gerar relatório pelo excel.</p>
                    <Link to="https://chamado-cofarminas-pjzq5nyci-sabrinasoaresdev.vercel.app/" target="_blank">Visualizar</Link>
                    <Link to="https://github.com/SabrinaSoaresDev/chamado-cofarminas.git" target="_blank">Github</Link>
                </div>
              </div>
              <div className="projetos-container">
              <img src={cardapio} alt="sistema de chamado" className="projetos-img"  />
                <div className="projetos-content">
                    <h4>Cardápio Online</h4>
                    <p>Site de cardápio online onde pode enviar o pedido pelo whatsapp para o estabelecimento.</p>
                    <Link to="https://cardapio-beta-ten.vercel.app/" target="_blank">Visualizar</Link>
                    <Link to="https://github.com/SabrinaSoaresDev/Cardapio.git" target="_blank">Github</Link>
                </div>
              </div>
              <div className="projetos-container">
              <img src={link} alt="sistema de chamado" className="projetos-img"  />
                <div className="projetos-content">
                    <h4>Encurtamento de Link</h4>
                    <p>Site para voce poder encurtar qualquer link da internet.</p>
                    <Link to="https://sujeito-link-sabrinasoaresdev.vercel.app/" target="_blank">Visualizar</Link>
                    <Link to="https://github.com/SabrinaSoaresDev/SujeitoLink.git" target="_blank">Github</Link>
                </div>
              </div>
              <div className="projetos-container">
              <img src={filmes} alt="sistema de chamado" className="projetos-img"  />
                <div className="projetos-content">
                    <h4>Filmes em Cartazes</h4>
                    <p>Site onde voce pode visualizar qualquer filme que estiver em cartaz na internet, com direito a trailer.</p>
                    <Link to="https://filme-poster.netlify.app/" target="_blank">Visualizar</Link>
                    <Link to="https://github.com/SabrinaSoaresDev/filme_poster.git" target="_blank">Github</Link>
                </div>
              </div>
              <div className="projetos-container">
              <img src={landing} alt="sistema de chamado" className="projetos-img"  />
                <div className="projetos-content">
                    <h4>Landing-Page</h4>
                    <p>Pagina em HTML como modelo para proximos projetos</p>
                    <Link to="https://pagina-inicial.vercel.app/" target="_blank">Visualizar</Link>
                    <Link to="https://github.com/SabrinaSoaresDev/Landing-Page.git" target="_blank">Github</Link>
                </div>
              </div>
              <div className="projetos-container">
              <img src={barbearia} alt="sistema de chamado" className="projetos-img"  />
                <div className="projetos-content">
                    <h4>Landing-Barbearia</h4>
                    <p>Pagina de divulgacão de uma barbearia sobre agendar serviço...</p>
                    <Link to="https://landpage-barbearia-git-main-sabrinasoaresdev.vercel.app/" target="_blank">Visualizar</Link>
                    <Link to="https://github.com/SabrinaSoaresDev/Landpage_barbearia.git" target="_blank">Github</Link>
                </div>
              </div>
              <div className="projetos-container">
              <img src={calculadora} alt="sistema de chamado" className="projetos-img"  />
                <div className="projetos-content">
                    <h4>Calculadora IMC</h4>
                    <p>Calcula seu peso e altura para saber se esta acima do peso.</p>
                    <Link to="https://calculadora-olv6cu2mi-sabrinasoaresdev.vercel.app/" target="_blank">Visualizar</Link>
                    <Link to="https://github.com/SabrinaSoaresDev/CalculadoraIMC.git" target="_blank">Github</Link>
                </div>
              </div>
            </section>
            <Footer />
            <div>
        <a
          href="https://api.whatsapp.com/send?phone=5533998036871&text=Quero%20fazer%20um%20Agendamento%20Hoje"
          className="btn-whatsapp"
          target="_blank"
        >
          <img src={whatsapp} alt="btn-whatsapp" />
          <span className="tootip-text">whatsapp</span>
        </a>
      </div>
        </>
    )
}
