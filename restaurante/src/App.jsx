import { useState } from 'react'
import './App.css'
import Postres from './components/Postres'
import Carrito from './components/Carrito'
import Footer from './components/Footer';


function App() {
  const [carrito, setCarrito] = useState([]);
  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto])
  };
  const eliminarCarrito = (indice) => {
    const nuevoCarrito = carrito.filter(
      (_,index) => index !== indice
    );
    setCarrito(nuevoCarrito);
  };
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  return (
    <>
    
    <Postres 
      agregarCarrito={agregarCarrito} />
    <Carrito
      carrito={carrito}
      eliminarCarrito={eliminarCarrito}
      vaciarCarrito={vaciarCarrito} />
    <Footer />
    </>
  )
}

export default App
