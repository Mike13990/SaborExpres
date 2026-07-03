import React from 'react';

function Bebidas({ agregarAlCarrito }) {
 const productos = [
  {
    id: 'b1',
    nombre: 'Refresco Cola',
    descripcion: 'Vaso grande de 600ml.',
    precio: 30,
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300'
  },
  {
    id: 'b2',
    nombre: 'Limonada',
    descripcion: 'Limonada fresca con chía.',
    precio: 35,
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300'
  },
  {
    id: 'b3',
    nombre: 'Té Helado',
    descripcion: 'Té negro con durazno.',
    precio: 30,
    img: 'https://images.unsplash.com/photo-1597481499666-130f8eb2c9cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VCVDMyVBOSUyMG5lZ3JvJTIwY29uJTIwZHVyYXpub3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 'b4',
    nombre: 'Agua Natural',
    descripcion: 'Botella de agua purificada 500ml.',
    precio: 20,
    img: 'https://images.unsplash.com/photo-1655079343782-f0fc4704753e?q=80&w=677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'b5',
    nombre: 'Malteada Fresa',
    descripcion: 'Con crema batida y cereza.',
    precio: 55,
    img: 'https://images.unsplash.com/photo-1611928237590-087afc90c6fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8J01hbHRlYWRhJTIwRnJlc2EnJTJDJTIwZGVzY3JpcGNpb24lM0ElMjAnQ29uJTIwY3JlbWElMjBiYXRpZGElMjB5JTIwY2VyZXphLiclMkN8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 'b6',
    nombre: 'Malteada Chocolate',
    descripcion: 'Chocolate espeso y chispas.',
    precio: 55,
    img: 'https://media.istockphoto.com/id/664329770/photo/chocolate-chip-and-chocolate-smoothie.jpg?s=612x612&w=is&k=20&c=yEF0GzS7ca0ue9O9XtG91Er8h8dSW1-sqZYCPHv391U='
  },
  {
    id: 'b7',
    nombre: 'Malteada Vainilla',
    descripcion: 'Sabor clásico con extra crema.',
    precio: 55,
    img: 'https://images.unsplash.com/photo-1629386133133-5e639cf8d388?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'b8',
    nombre: 'Café Americano',
    descripcion: 'Café de grano recién molido.',
    precio: 35,
    img: 'https://images.unsplash.com/photo-1691014453405-7e3489d0c433?q=80&w=712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'b9',
    nombre: 'Capuchino',
    descripcion: 'Espuma de leche y canela.',
    precio: 45,
    img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300'
  },
  {
    id: 'b10',
    nombre: 'Jugo de Naranja',
    descripcion: 'Recién exprimido, 400ml.',
    precio: 40,
    img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300'
  }
];

  return (
    <section id="bebidas" className="categoria-seccion">
      <h2>🥤 Bebidas Refresh</h2>
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

export default Bebidas;