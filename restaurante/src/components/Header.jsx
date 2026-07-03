import React from 'react';

function Header({ setVistaActual, toggleCarrito, numItems, setMenuMovilAbierto}) {
  
  return (
    <header className="header-principal">
      <nav>
        <button className="btn-hamburguesa" onClick={() => setMenuMovilAbierto(prev => !prev)}>
          ☰
        </button>
        <div className="logo" onClick={() => setVistaActual('inicio')} style={{cursor: 'pointer'}}>
          <img src="https://i.postimg.cc/g0VbJk4P/log.png" alt="Logo Sabor Express"/>
          <h1>Sabor express</h1>
        </div>

        <ul className="nav-links-top">
          <li onClick={() => setVistaActual('inicio')}>Inicio</li>
          <li onClick={() => {
            setVistaActual('inicio');
            setTimeout(() => document.getElementById('acerca-de').scrollIntoView({ behavior: 'smooth' }), 100);
          }}>Acerca de</li>
          <li onClick={() => {
            setVistaActual('inicio');
            setTimeout(() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' }), 100);
          }}>Contacto</li>
        </ul>

        <button className="btn-carrito-toggle" onClick={toggleCarrito}>
          🛒 Carrito ({numItems})
        </button>
      </nav>
    </header>
  );
}

export default Header;