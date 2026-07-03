import React from 'react';

function Menu({ agregarAlCarrito }) {
  const productos = [
    { 
      id: 'm1', 
      nombre: 'Hamburguesa Clásica', 
      descripcion: 'Carne, lechuga, tomate y queso.', 
      precio: 85, 
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300' 
    },
    { id: 'm2', 
      nombre: 'Hamburguesa Doble', 
      descripcion: 'Doble carne, doble queso, tocino.', 
      precio: 120, 
      img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFtYnVyZ3VlcyUyMGRvYmxlfGVufDB8fDB8fHww' 
    },
    { 
      id: 'm3', 
      nombre: 'Hamburguesa BBQ', 
      descripcion: 'Carne, aros de cebolla y salsa BBQ.', 
      precio: 110, 
      img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300' 
    },
    { 
      id: 'm4', 
      nombre: 'Chicken Sandwich', 
      descripcion: 'Pollo crujiente con mayonesa picante.', 
      precio: 95, img: 'https://plus.unsplash.com/premium_photo-1738802845911-809a01acfa50?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 'm5', 
      nombre: 'Menú Infantil', 
      descripcion: 'Mini hamburguesa con papas y juguete.', 
      precio: 70, 
      img: 'https://media.istockphoto.com/id/2152696991/photo/kids-meal-with-toy-and-juice-on-table.jpg?s=612x612&w=is&k=20&c=Fa7AMhB0qi-l4psMjysTZiEbV2W2fHVDybPSOxjfwRo=' 
    },
    { 
      id: 'm6', 
      nombre: 'Hot Dog Especial', 
      descripcion: 'Salchicha de pavo, tocino y pico de gallo.', 
      precio: 65, 
      img: 'https://plus.unsplash.com/premium_photo-1712327992307-281c0b2ab9f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 'm7', 
      nombre: 'Papas Fritas Grandes', 
      descripcion: 'Porción extra grande de papas crujientes.', 
      precio: 45, 
      img: 'https://images.unsplash.com/photo-1661081090290-9b66fd49d882?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 'm8', 
      nombre: 'Aros de Cebolla', 
      descripcion: 'Aros empanizados con aderezo ranch.', 
      precio: 50, 
      img: 'https://images.unsplash.com/photo-1612487439058-0564e17f761b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 'm9', 
      nombre: 'Nuggets (10 pz)', 
      descripcion: 'Nuggets de pechuga de pollo.', precio: 75, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=300' },
    { 
      id: 'm10', 
      nombre: 'Wrap de Pollo', 
      descripcion: 'Tortilla de harina, pollo, lechuga y tomate.', 
      precio: 80, img: 'https://plus.unsplash.com/premium_photo-1664478244517-513dc18af854?q=80&w=657&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ];

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