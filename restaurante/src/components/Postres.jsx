import {postres} from '../data/Productos'

function Postres({postre, agregarCarrito}) {
    return (
        <section className='seccion-postres'>
            <h2>🍰 Postres</h2>
            <div className='contenedor-cards'>
                {postres.map((postre) => (
                    <article className="card">
                        <img src={postre.imagen} alt={postre.nombre} />
                        <div className="contenido-card">
                            <h2>{postre.nombre}</h2>
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