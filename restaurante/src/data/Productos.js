import arosCebolla from "../assets/menus/aros-cebolla.jpg";
import chickenSandwich from "../assets/menus/chicken-sandwich.jpg";
import hamburguesaBBQ from "../assets/menus/hamburguesa-bbq.jpg";
import hamburguesaClasica from "../assets/menus/hamburguesa-clasica.jpg";
import hamburguesaDoble from "../assets/menus/hamburguesa-doble.jpg";
import hotdog from "../assets/menus/hotdog.jpg";
import menuInfantil from "../assets/menus/menu-infantil.jpg";
import nuggets from "../assets/menus/nuggets.jpg";
import papasFritas from "../assets/menus/papas-fritas.jpg";
import wrapPollo from "../assets/menus/wrap-pollo.jpg";
const menus = [
    { 
      id: 'm1', 
      nombre: 'Hamburguesa Clásica', 
      descripcion: 'Carne, lechuga, tomate y queso.', 
      precio: 85, 
      imagen: hamburguesaClasica
    },
    { id: 'm2', 
      nombre: 'Hamburguesa Doble', 
      descripcion: 'Doble carne, doble queso, tocino.', 
      precio: 120, 
      imagen: hamburguesaDoble 
    },
    { 
      id: 'm3', 
      nombre: 'Hamburguesa BBQ', 
      descripcion: 'Carne, aros de cebolla y salsa BBQ.', 
      precio: 110, 
      imagen: hamburguesaBBQ
    },
    { 
      id: 'm4', 
      nombre: 'Chicken Sandwich', 
      descripcion: 'Pollo crujiente con mayonesa picante.', 
      precio: 95, 
      imagen: chickenSandwich
    },
    { 
      id: 'm5', 
      nombre: 'Menú Infantil', 
      descripcion: 'Mini hamburguesa con papas y juguete.', 
      precio: 70, 
      imagen: menuInfantil
    },
    { 
      id: 'm6', 
      nombre: 'Hot Dog Especial', 
      descripcion: 'Salchicha de pavo, tocino y pico de gallo.', 
      precio: 65, 
      imagen: hotdog
    },
    { 
      id: 'm7', 
      nombre: 'Papas Fritas Grandes', 
      descripcion: 'Porción extra grande de papas crujientes.', 
      precio: 45, 
      imagen: papasFritas 
    },
    { 
      id: 'm8', 
      nombre: 'Aros de Cebolla', 
      descripcion: 'Aros empanizados con aderezo ranch.', 
      precio: 50, 
      imagen: arosCebolla
    },
    { 
      id: 'm9', 
      nombre: 'Nuggets (10 pz)', 
      descripcion: 'Nuggets de pechuga de pollo.',
      precio: 75,
      imagen: nuggets
    },
    { 
      id: 'm10', 
      nombre: 'Wrap de Pollo', 
      descripcion: 'Tortilla de harina, pollo, lechuga y tomate.', 
      precio: 80,
      imagen: wrapPollo
    }
  ];

import agua from "../assets/bebidas/agua.jpg";
import cafe from "../assets/bebidas/cafe.jpg";
import capuchino from "../assets/bebidas/capuchino.jpg";
import cola from "../assets/bebidas/cola.jpg";
import jugoNaranja from "../assets/bebidas/jugo-naranja.jpg";
import limonada from "../assets/bebidas/limonada.jpg";
import malteadaChocolate from "../assets/bebidas/malteada-chocolate.jpg";
import malteadaFresa from "../assets/bebidas/malteada-fresa.jpg";
import malteadaVainilla from "../assets/bebidas/malteada-vainilla.jpg";
import teFrio from "../assets/bebidas/te-frio.jpg";
const bebidas = [
  {
    id: 'b1',
    nombre: 'Refresco Cola',
    descripcion: 'Vaso grande de 600ml.',
    precio: 30,
    imagen: cola
  },
  {
    id: 'b2',
    nombre: 'Limonada',
    descripcion: 'Limonada fresca con chía.',
    precio: 35,
    imagen: limonada
  },
  {
    id: 'b3',
    nombre: 'Té Frío',
    descripcion: 'Té negro con durazno.',
    precio: 30,
    imagen: teFrio
  },
  {
    id: 'b4',
    nombre: 'Agua Pura',
    descripcion: 'Botella de agua purificada 500ml.',
    precio: 20,
    imagen: agua
  },
  {
    id: 'b5',
    nombre: 'Malteada Fresa',
    descripcion: 'Con crema batida y cereza.',
    precio: 55,
    imagen: malteadaFresa
  },
  {
    id: 'b6',
    nombre: 'Malteada Chocolate',
    descripcion: 'Chocolate espeso y chispas.',
    precio: 55,
    imagen: malteadaChocolate
  },
  {
    id: 'b7',
    nombre: 'Malteada Vainilla',
    descripcion: 'Sabor clásico con extra crema.',
    precio: 55,
    imagen: malteadaVainilla
  },
  {
    id: 'b8',
    nombre: 'Café Americano',
    descripcion: 'Café de grano recién molido.',
    precio: 35,
    imagen: cafe
  },
  {
    id: 'b9',
    nombre: 'Capuchino',
    descripcion: 'Espuma de leche y canela.',
    precio: 45,
    imagen: capuchino
  },
  {
    id: 'b10',
    nombre: 'Jugo de Naranja',
    descripcion: 'Recién exprimido, 400ml.',
    precio: 40,
    imagen: jugoNaranja
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