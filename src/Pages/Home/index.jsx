import Header from "../../Componente/Header";
import { FaLinkedin, FaInstagram, FaGithub, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { FaGraduationCap, FaReact, FaBootstrap } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoIosRocket } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import perfil from '../../assets/perfil2.jpeg';
import foto from '../../assets/foto.jpg';
import tarefas from '../../assets/tarefas.png';
import chamados from '../../assets/chamado.png';
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

const PROJECTS = [
  {
    id: 1,
    title: "Lista de Tarefas",
    description: "Sistema de Gestão de Tarefas",
    image: tarefas,
    liveUrl: "https://tarefas-roan.vercel.app/",
    githubUrl: "https://github.com/SabrinaSoaresDev/Tarefas"
  },
  {
    id: 2,
    title: "Gestão de Chamados",
    description: "Gestão de chamados onde é informado e registrado todos os chamados da empresa e gerar relatório pelo excel.",
    image: chamados,
    liveUrl: "https://chamado-cofarminas-pjzq5nyci-sabrinasoaresdev.vercel.app/",
    githubUrl: "https://github.com/SabrinaSoaresDev/chamado-cofarminas.git"
  },
  {
    id: 3,
    title: "Cardápio Online",
    description: "Site de cardápio online onde pode enviar o pedido pelo whatsapp para o estabelecimento.",
    image: cardapio,
    liveUrl: "https://cardapio-beta-ten.vercel.app/",
    githubUrl: "https://github.com/SabrinaSoaresDev/Cardapio.git"
  },
  {
    id: 4,
    title: "Encurtamento de Link",
    description: "Site para você poder encurtar qualquer link da internet.",
    image: link,
    liveUrl: "https://sujeito-link-sabrinasoaresdev.vercel.app/",
    githubUrl: "https://github.com/SabrinaSoaresDev/SujeitoLink.git"
  },
  {
    id: 5,
    title: "Filmes em Cartazes",
    description: "Site onde você pode visualizar qualquer filme que estiver em cartaz na internet, com direito a trailer.",
    image: filmes,
    liveUrl: "https://filme-poster.netlify.app/",
    githubUrl: "https://github.com/SabrinaSoaresDev/filme_poster.git"
  },
  {
    id: 6,
    title: "Landing-Page",
    description: "Página em HTML como modelo para próximos projetos",
    image: landing,
    liveUrl: "https://pagina-inicial.vercel.app/",
    githubUrl: "https://github.com/SabrinaSoaresDev/Landing-Page.git"
  },
  {
    id: 7,
    title: "Landing-Barbearia",
    description: "Página de divulgação de uma barbearia sobre agendar serviço...",
    image: barbearia,
    liveUrl: "https://landpage-barbearia-git-main-sabrinasoaresdev.vercel.app/",
    githubUrl: "https://github.com/SabrinaSoaresDev/Landpage_barbearia.git"
  },
  {
    id: 8,
    title: "Calculadora IMC",
    description: "Calcula seu peso e altura para saber se está acima do peso.",
    image: calculadora,
    liveUrl: "https://calculadora-olv6cu2mi-sabrinasoaresdev.vercel.app/",
    githubUrl: "https://github.com/SabrinaSoaresDev/CalculadoraIMC.git"
  }
];

const SKILLS = [
  { name: "HTML 5", icon: <FaHtml5 size={80} color="#F16529" /> },
  { name: "CSS3", icon: <FaCss3Alt size={80} color="#FF9F1C" /> },
  { name: "Javascript", icon: <IoLogoJavascript size={80} color="#F7DF1E" /> },
  { name: "React", icon: <FaReact size={80} color="#2E86C1" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={80} color="#fff" /> },
  { name: "Vs Code", icon: <VscVscode size={80} color="#2e86c1" /> },
  { name: "Github", icon: <FaGitAlt size={80} color="#f00" /> },
  { name: "MySQL", icon: <SiMysql size={80} color="#fff" /> }
];

const curriculumUrl = 'https://drive.google.com/file/d/1vq6WosUlE0MahoaKmrSBJaVOYnssfIgl/view';

export default function Home() {
  const downloadCurriculum = () => {
    window.open(curriculumUrl, '_blank');
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="inicio" aria-labelledby="main-heading">
        <div>
          <img src={perfil} alt="Sabrina Soares" className="profile-image" />
        </div>
        <div className="bem-vindo">
          <h1 id="main-heading">Dev Software</h1>
          <p>Oi, sou a Sabrina Soares, sou desenvolvedora de software formada em Sistemas de Informação.</p>
          <p>Sejam bem-vindos ao meu Portfólio</p>
          <button onClick={downloadCurriculum} aria-label="Baixar currículo">Download Currículo</button>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/sabrinams.9/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={25} />
          </a>
          <a href="https://www.linkedin.com/in/sabrina-moreira-soares-caires/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={25} />
          </a>
          <a href="https://github.com/SabrinaSoaresDev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={25} />
          </a>

        </div>
      </section>

      {/* About Section */}
      <section id="sobre" aria-labelledby="about-heading">
        <h1 id="about-heading" className="titulo">Sobre</h1>

        <div className="container-sobre">
          <img src={foto} alt="Sabrina Soares" className="foto-sobre" />
          <div className="texto-sobre">
            <h3>Meu nome é Sabrina Soares!</h3>
            <p>Tenho 26 anos, sou natural de Minas Gerais, nascida na cidade de Joaima, mas morando em Governador Valadares.</p>
            <p>Profissional formada em Sistemas de Informação, com sólida experiência em análise de sistemas e suporte técnico. Conhecimento avançado em HTML, CSS, JavaScript e atualmente aprofundando em React. Comprometida com a excelência na execução de serviços, destacando-se pela capacidade de resolver problemas de forma ágil e eficiente, contribuindo para a otimização dos processos e satisfação dos clientes.</p>
            <p>Segue abaixo algumas habilidades e projetos que realizei:</p>
            <div className="formacao">
              <div>
                <FaGraduationCap size={25} aria-hidden="true" />
                <h4>Formação</h4>
                <span>Sistemas de Informação</span>
                <span>Concluído</span>
              </div>
              <div>
                <IoIosRocket size={25} aria-hidden="true" />
                <h4>Cursos Complementares</h4>
                <span>React Js do zero ao avançado na prática</span>
                <span>Em Andamento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" aria-labelledby="skills-heading">
        <h1 id="skills-heading" className="titulo">Habilidades</h1>
        <div className="habilidades">
          <span className="skills-label">Linguagens</span>
          <ul className="skills-list">
            {SKILLS.map((skill, index) => (
              <li key={index}>
                {skill.icon}
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="projetos" aria-labelledby="projects-heading">
        <h1 id="projects-heading" className="titulo">Projetos</h1>
        <div className="projects-grid">
          {PROJECTS.map(project => (
            <div key={project.id} className="projeto-card">
              <img src={project.image} alt={project.title} className="projeto-img" />
              <div className="projeto-content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="projeto-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visualizar</a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      
      {/* WhatsApp Floating Button */}
      <div className="whatsapp-float">
        <a
          href="https://api.whatsapp.com/send?phone=5533998036871&text=Quero%20fazer%20um%20Agendamento%20Hoje"
          className="btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contato pelo WhatsApp"
        >
          <img src={whatsapp} alt="WhatsApp" />
          <span className="tooltip-text">WhatsApp</span>
        </a>
      </div>
    </>
  );
}
