function Carrito({carrito, eliminarCarrito, vaciarCarrito}) {
    const total = carrito.reduce((acumulado, producto) =>
        acumulado + producto.precio, 0);
    return (
        <aside className="carrito">
            <h3>Carrito de Compras</h3>
            <p>Productos agregados: {carrito.length}</p>
            {carrito.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                carrito.map((producto, index) => (
                    <div key={index} className="item-carrito">
                        <p>{producto.nombre} - Q.{producto.precio.toFixed(2)}</p>
                        <button onClick={() => eliminarCarrito(index)}>Eliminar</button>
                    </div>
                ))
            )}
            <hr />
            <h3>Total: Q.{total.toFixed(2)}</h3>
            <button onClick={vaciarCarrito} className="boton-vaciar">Vaciar carrito</button>
        </aside>
    );
}
export default Carrito;