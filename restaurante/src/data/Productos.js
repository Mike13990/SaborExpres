  const menus = [
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

const bebidas = [
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

import pastelChocolate from "../assets/postres/pastel-chocolate.jpg";
import cheesecakeFresa from "../assets/postres/cheesecake-fresa.jpg";
import flanCaramelo from "../assets/postres/flan.jpg";
import brownie from "../assets/postres/brownie.jpg";
import helado from "../assets/postres/helado.jpg";
import tresLeches from "../assets/postres/tres-leches.jpg";
import cupcake from "../assets/postres/cupcake.jpg";
import donas from "../assets/postres/donas.jpg";
import pieLimon from "../assets/postres/pie-limon.jpg";
import galletas from "../assets/postres/galletas.jpg";
const postres = [
        {
            id: 1,
            nombre: "Pastel de chocolate",
            descripcion: "Porción de pastel húmedo con cobertura de chocolate.",
            precio: 18.00,
            imagen: pastelChocolate
        },
        {
            id: 2,
            nombre: "Cheesecake de fresa",
            descripcion: "Cheesecake cremoso con salsa de fresa.",
            precio: 22.00,
            imagen: cheesecakeFresa
        },
        {
            id: 3,
            nombre: "Flan de caramelo",
            descripcion: "Flan tradicional con caramelo líquido.",
            precio: 14.00,
            imagen: flanCaramelo
        },
        {
            id: 4,
            nombre: "Brownie",
            descripcion: "Brownie de chocolate con nueces.",
            precio: 16.00,
            imagen: brownie
        },
        {
            id: 5,
            nombre: "Helado mixto",
            descripcion: "Tres bolas de helado de diferentes sabores.",
            precio: 15.00,
            imagen: helado
        },
        {
            id: 6,
            nombre: "Tres leches",
            descripcion: "Pastel bañado en mezcla de tres leches.",
            precio: 20.00,
            imagen: tresLeches
        },
        {
            id: 7,
            nombre: "Cupcake vainilla",
            descripcion: "Cupcake suave con crema de vainilla.",
            precio: 12.00,
            imagen: cupcake
        },
        {
            id: 8,
            nombre: "Donas glaseadas",
            descripcion: "Dos donas con glaseado dulce.",
            precio: 13.00,
            imagen: donas
        },
        {
            id: 9,
            nombre: "Pie de limón",
            descripcion: "Pie frío con crema de limón.",
            precio: 19.00,
            imagen: pieLimon
        },
        {
            id: 10,
            nombre: "Galletas con chispas",
            descripcion: "Galletas horneadas con chispas de chocolate.",
            precio: 10.00,
            imagen: galletas
        }
    ];

    const Productos = {
    menus,
    bebidas,
    postres
    };
    export default Productos;