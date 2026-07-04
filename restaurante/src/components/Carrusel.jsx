import React, { useState, useEffect } from 'react';
import banner1 from "../assets/banner_1.jpg";
import banner2 from "../assets/banner_2.jpg";
import banner3 from "../assets/banner_3.jpg";

function Carrusel() {
  const [indiceActual, setIndiceActual] = useState(0);
  const imagenes = [banner1, banner2, banner3];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % imagenes.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  return (
    <div className="carrusel-contenedor">
      {imagenes.map((img, index) => (
        <img 
          key={index} 
          src={img} 
          alt={`Oferta del día ${index + 1}`} 
          className={index === indiceActual ? 'activa' : ''}
        />
      ))}
    </div>
  );
}

export default Carrusel;