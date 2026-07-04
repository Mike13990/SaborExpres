import React from 'react';
import Productos from '../data/Productos';

function Postres({agregarCarrito}) {
    const postres = Productos.postres;
    return (
        <section id='postres' className='categoria-seccion'>
            <h2>🍰 Postres</h2>
            <div className='grid-productos'>
                {postres.map((postre) => (
                    <article key={postre.id} className="card-producto">
                        <img src={postre.imagen} alt={postre.nombre} />
                        <div className="contenido-card">
                            <h3>{postre.nombre}</h3>
                            <p>{postre.descripcion}</p>
                            <p className="precio">Q.{postre.precio.toFixed(2)}</p>
                            <button onClick={() => agregarCarrito(postre)}>Agregar al carrito</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
export default Postres;