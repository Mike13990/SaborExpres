import React, { useState, useEffect } from 'react';

function Carrusel() {
  const [indiceActual, setIndiceActual] = useState(0);
  const imagenes = [
    "https://i.postimg.cc/Dz6JGFw7/1.png",
    "https://i.postimg.cc/ZqbxBJhB/2.png",
    "https://i.postimg.cc/NG97rNZb/31.png"
  ];

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