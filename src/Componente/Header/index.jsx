import React from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import "./header.css"; // Importando o arquivo CSS

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav-bar">
        <Link className="logo" to="/" onClick={scrollToTop}>
          Sabrina Soares Dev
        </Link>
        <div className="nav-list">
          <ul>
            <li>
              <Link to="/" onClick={scrollToTop}>Inicio</Link>
            </li>
            <li>
              <Link to="#sobre" onClick={scrollToTop}>Sobre</Link>
            </li>
            <li>
              <Link to="#habilidades">Habilidades</Link>
            </li>
            <li>
              <Link to="#serviços" onClick={scrollToTop}>Serviços</Link>
            </li>
            <li>
              <Link to="#projetos" onClick={scrollToTop}>Projetos</Link>
            </li>
            <li>
              <Link to="#contato" onClick={scrollToTop}>Contatos</Link>
            </li>
          </ul>
        </div>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <BiMenu size={30} color="#fff" />
        </div>
      </nav>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={scrollToTop}>Inicio</Link>
          </li>
          <li>
            <Link to="/contato" onClick={scrollToTop}>Contato</Link>
          </li>
          <li>
            <Link to="/AreaCliente">Area do Cliente</Link>
          </li>
          <li>
            <Link to="/blog" onClick={scrollToTop}>Informativo</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
