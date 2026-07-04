import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Carrusel from './components/Carrusel.jsx';
import Menu from './components/Menu.jsx';
import Bebidas from './components/Bebidas.jsx';
import Postres from './components/Postres.jsx';
import Menuizquierdo from './components/Menuizquierdo.jsx';
import Inicio from './components/Inicio.jsx';
import Carrito from './components/Carrito.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const [vistaActual, setVistaActual] = useState('inicio'); 
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false); 
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [mostrarPublicidad, setMostrarPublicidad] = useState(true);

  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    setCarrito(carritoAnterior => [...carritoAnterior, producto]);
      // Pequeño aviso visual para saber que funcionó
    alert(`¡${producto.nombre} agregado al carrito!`);
  };

  const eliminarCarrito = (indice) => {
    const nuevoCarrito = carrito.filter((_, index) => index !== indice);
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <>
      <Header 
        setVistaActual={setVistaActual} 
        setMenuMovilAbierto={setMenuMovilAbierto}
        toggleCarrito={() => setCarritoAbierto(!carritoAbierto)}
        numItems={carrito.length}
      />
      
      <div className="layout-dashboard">
        <Menuizquierdo 
          setVistaActual={setVistaActual} 
          vistaActual={vistaActual} 
          menuMovilAbierto={menuMovilAbierto}
          setMenuMovilAbierto={setMenuMovilAbierto}
        />

        <main className="contenido-central">
          <Carrusel />

          {vistaActual === 'inicio' && <Inicio />}
          
          {(vistaActual === 'todos' || vistaActual === 'menus') && (
            <Menu agregarCarrito={agregarCarrito} />
          )}
          {(vistaActual === 'todos' || vistaActual === 'bebidas') && (
            <Bebidas agregarCarrito={agregarCarrito} />
          )}
          {(vistaActual === 'todos' || vistaActual === 'postres') && (
            <Postres agregarCarrito={agregarCarrito} />
          )}
        </main>

        {mostrarPublicidad && (
          <aside className="publicidad-flotante">
              <button
                  className="btn-cerrar-publicidad"
                  onClick={() => setMostrarPublicidad(false)}>✕</button>
              <h3>🚗 ¡Oferta especial!</h3>
              <p>Conoce los mejores vehículos al mejor precio.</p>
              <button>Más información</button>
          </aside>
        )}

      {carritoAbierto && (
        <div className="contenedor-carrito-flotante">
          <Carrito 
            carrito={carrito}
            eliminarCarrito={eliminarCarrito}
            vaciarCarrito={vaciarCarrito}
          />
          <button className="btn-cerrar-carrito" onClick={() => setCarritoAbierto(false)}>
            Cerrar Carrito
          </button>
        </div>
      )}
      </div>
      <Footer />
    </>
  );
}

export default App;