import React from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import "./header.css"; 

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
              <a href="/" onClick={scrollToTop}>Inicio</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#habilidades" >Habilidades</a>
            </li>
            <li>
              <a href="#projetos" >Projetos</a>
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
            <a href="/" onClick={scrollToTop}>Inicio</a>
          </li>
          
          <li>
            <a href="#sobre" >Sobre</a>
          </li>
          <li>
            <a href="#habilidades" >Habilidades</a>
          </li>
          <li>
            <a href="#projetos" >Projetos</a>
          </li>
          <li>
            <a href="/contato" onClick={scrollToTop}>Contato</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
