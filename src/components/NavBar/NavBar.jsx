import React, { useState } from 'react';
import "./NavBar.css";
import logoSolHaus from "../../assets/logoSolHaus.png";
import { CartWidget } from '../CartWidget/CartWidget';

const NavBar = () => {
  // Estado para el menú hamburguesa
  const [menuOpen, setMenuOpen] = useState(false);

  // Estado para la barra de búsqueda
  const [searchOpen, setSearchOpen] = useState(false);

  // Función para alternar el menú hamburguesa
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para alternar la barra de búsqueda
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="nav-menu">
      {/* Logo */}
      <a href="#">
        <img className="logo" src={logoSolHaus} alt="Logo de Sol Haus" />
      </a>

      {/* Menú */}
      <nav className={`nav ${menuOpen ? "visible" : ""}`}>
        <ul className="menu">
          <li className="menu__item"><a href="#">Inicio</a></li>
          <li className="menu__item productos">
            <a href="#">Productos</a>
            <ul className="submenu">
              <li><a href="#">Bazar</a></li>
              <li><a href="#">Organización del hogar</a></li>
              <li><a href="#">Repostería</a></li>
              <li><a href="#">Viajes</a></li>
            </ul>
          </li>
          <li className="menu__item"><a href="#">Información</a></li>
          <li className="menu__item"><a href="#">Contacto</a></li>
          <li className="dropdown">
            <button className="dropdown-user-btn">
              <i className="bi bi-person"></i>
            </button>
            <ul className="dropdown-content">
              <li><a href="#">Iniciar sesión</a></li>
              <li><a href="#">Registrarse</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Iconos de búsqueda y carrito fuera del menú */}
      <div className="right-icons">
        {/* Botón de búsqueda */}
        <button type="button" className="search-btn" onClick={toggleSearch}>
          <i className="bi bi-search"></i>
        </button>

        {/* Input de búsqueda que aparece cuando searchOpen es true */}
        {searchOpen && (
          <input
            type="text"
            className="search-input"
            placeholder="Buscar productos..."
          />
        )}
       <CartWidget menuOpen={menuOpen}/>
      </div>

      {/* Botón hamburguesa */}
      <button className="hamburger" onClick={toggleMenu}>
        <i className={menuOpen ? "bi bi-x" : "bi bi-list"}></i>
      </button>
    </div>
  );
};

export default NavBar;
