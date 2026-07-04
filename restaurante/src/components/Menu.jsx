import React from 'react';
import Productos from '../data/Productos';

function Menu({ agregarAlCarrito }) {
const productos = Productos.menus;

  return (
    <section id="menus" className="categoria-seccion">
      <h2>🍔 Menús Principales</h2>
      <div className="grid-productos">
        {productos.map((prod) => (
          <article key={prod.id} className="card-producto">
            <img src={prod.img} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>{prod.descripcion}</p>
            <p className="precio">Q{prod.precio.toFixed(2)}</p>
            <button onClick={() => agregarAlCarrito(prod)}>Agregar al carrito</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Menu;