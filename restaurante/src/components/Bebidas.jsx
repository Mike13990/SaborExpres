import React from 'react';
import Productos from '../data/Productos';

function Bebidas({ agregarCarrito }) {
 const productos = Productos.bebidas;

  return (
    <section id="bebidas" className="categoria-seccion">
      <h2>🥤 Bebidas Refresh</h2>
      <div className="grid-productos">
        {productos.map((prod) => (
          <article key={prod.id} className="card-producto">
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>{prod.descripcion}</p>
            <p className="precio">Q{prod.precio.toFixed(2)}</p>
            <button onClick={() => agregarCarrito(prod)}>Agregar al carrito</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Bebidas;