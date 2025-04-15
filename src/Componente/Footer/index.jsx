import "./footer.css";
import { BiLogoInstagram, BiLogoFacebookSquare } from "react-icons/bi";

export default function Footer(){
    const  scrollToTop  =  ( )  =>  {
        janela . scrollTo ( {
          superior : 0 ,
          comportamento : "suave" ,
        } ) ;
      } ;
    return(
        <>
        <footer className="footer">
        <div className="content">
          <div className="telefone">
            <ul>
              <a href="/" onClick={scrollToTop}>
                Inicio
              </a>
              <a href="#sobre">
                Sobre
              </a>
              <a href="#habilidades">Habilidades</a>
              <a href="#projeto">
                Projetos
              </a>
              
            </ul>
          </div>
          <div className="social">
              <a href={"https://www.instagram.com/sabrinams.9/"} target="_blank"><BiLogoInstagram size={35} color="#fff" /></a>
              <a href={"https://www.facebook.com/sabrina.Moreira.0/"} target="_blank"><BiLogoFacebookSquare size={35} color="#fff" /></a>
              </div>
        </div>
      </footer>
      <div className="pe">
        <p>Copyright 2025 | Todos os direitos Reservados. | Desenvolvido Por: Sabrina Soares</p>
      </div>
        </>
    )
}
