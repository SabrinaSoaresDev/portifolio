import Header from "../../Componente/Header";
import { FaLinkedin, FaInstagram, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaGraduationCap, FaReact } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import perfil from '../../assets/perfil2.jpeg';
import foto from '../../assets/foto.jpg';
import './home.css';

export default function Home(){
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
                    <button >Download Curriculo</button>
                </div>
                <div className="social">
                <FaInstagram size={25}  />
                <FaLinkedin size={25} />
                <FaGithub size={25} />
                </div>
            </section>
            <section>
              <div class="container-sobre">
                
                  <img src={foto} alt="Minha foto" className="foto-sobre" />
                <div class="texto-sobre">
                  <h1>Sobre</h1>
                  <h3>Meu nome é Sabrina Soares!</h3>
                  <p>Tenho 26 anos, sou natural de Minas Gerais, nascida na cidade de Joaima, mas morando em Governador Valadares.</p>
                  <p>Profissional formada em Sistemas de Informação, com sólida experiência em análise de sistemas e suporte técnico. Conhecimento avançado em HTML, CSS, JavaScript e atualmente aprofundando em React. Comprometida com a excelência na execução de serviços, destacando-se pela capacidade de resolver problemas de forma ágil e eficiente, contribuindo para a otimização dos processos e satisfação dos clientes.</p>
                  <p>Segue abaixo algumas habilidades e projetos que realizei:</p>
                  <div class="formacao">
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

        <section class="habilidades">
            <h1>Habilidades</h1>
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
            </ul>
            </section>
            <section>
                <h1>Projetos</h1>
                <h4>Gestão de Chamados </h4>
                <p></p>
            </section>
        </>
    )
}