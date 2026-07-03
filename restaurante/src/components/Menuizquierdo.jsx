import React from 'react';

function Menuizquierdo({ setVistaActual, vistaActual, menuMovilAbierto, setMenuMovilAbierto }) {
 
  const manejarClick = (vista) => {
    setVistaActual(vista);
    if (setMenuMovilAbierto) setMenuMovilAbierto(false); 
  };

  const manejarScroll = (id) => {
    setVistaActual('inicio');
    if (setMenuMovilAbierto) setMenuMovilAbierto(false); // Cierra el menú lateral
    if (id) {
      // Da un pequeño tiempo para asegurar que la vista cargó antes de hacer scroll
      setTimeout(() => {
        const elemento = document.getElementById(id);
        if (elemento) elemento.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }

  return (
     <aside className={`sidebar-menu ${menuMovilAbierto ? 'abierto' : ''}`}>
        <div className="sidebar-header-movil">
          <h3>Explorar</h3>
          <button className="btn-cerrar-menu" onClick={() => setMenuMovilAbierto(false)}>✖</button>
        </div>
      <ul>
        <li 
          className={vistaActual === 'todos' ? 'activo' : ''} 
          onClick={() => setVistaActual('todos')}
        >
          🍽️ Todos los Productos
        </li>
        <li 
          className={vistaActual === 'menus' ? 'activo' : ''} 
          onClick={() => setVistaActual('menus')}
        >
          🍔 Menús Principales
        </li>
        <li 
          className={vistaActual === 'bebidas' ? 'activo' : ''} 
          onClick={() => setVistaActual('bebidas')}
        >
          🥤 Bebidas
        </li>
        <li 
          className={vistaActual === 'postres' ? 'activo' : ''} 
          onClick={() => setVistaActual('postres')}
        >
          🍰 Postres
        </li>
      </ul>
    </aside>
  );
}

export default Menuizquierdo;