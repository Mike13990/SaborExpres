import React from 'react';

function Inicio() {
  return (
    <div className="inicio-contenedor">
      
      {/* Sección Hero (Estilo "Pide comida y mucho más") */}
      <section className="hero-section">
        <div className="hero-texto">
          <h2>Pide comida y mucho más</h2>
          <p>Restaurantes y tiendas de alimentación que realizan entregas cerca de ti.</p>
        </div>
        <div className="hero-imagen">
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600" alt="Hamburguesa Gigante" />
        </div>
      </section>

      <section id="acerca-de" className="seccion-oscura">
        <h2>Acerca de FastBite</h2>
        <h3>Nuestra esencia.</h3>
        
        <div className="grid-3-columnas">
          <div className="tarjeta-oscura">
            <span className="icono">📜</span>
            <h4>Nuestra Historia</h4>
            <p>✔ Nacimos en 2020 con la idea de llevar sabor auténtico a cada hogar.</p>
            <p>✔ Más de 1000 pedidos entregados.</p>
          </div>
          <div className="tarjeta-oscura">
            <span className="icono">🎯</span>
            <h4>Misión</h4>
            <p>✔ Ofrecer la mejor calidad en comida rápida.</p>
            <p>✔ Servicio excelente y veloz.</p>
          </div>
          <div className="tarjeta-oscura">
            <span className="icono">👁️</span>
            <h4>Visión</h4>
            <p>✔ Ser la cadena número uno a nivel nacional.</p>
            <p>✔ Innovar constantemente nuestro menú.</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="seccion-oscura seccion-contacto">
        <h2>Contacto y Ubicación</h2>
        <h3>Estamos para servirte</h3>
        
        <div className="grid-3-columnas">
          <div className="item-contacto">
            <span className="icono">📍</span>
            <h4>Dinos dónde estás</h4>
            <p>Av.  Sur 123, Ciudad de guatemala. Te esperamos en nuestra sucursal principal.</p>
          </div>
          <div className="item-contacto">
            <span className="icono">📞</span>
            <h4>Llámanos</h4>
            <p>Teléfono: +502 5654 2252<br/>Atención de Lunes a Domingo de 9:00 am a 11:00 pm.</p>
          </div>
          <div className="item-contacto">
            <span className="icono">✉️</span>
            <h4>Escríbenos</h4>
            <p>contacto@saborexpress.com<br/>Respondemos todas tus dudas al instante.</p>
          </div>
        </div>

        {/* Mapa de ubicación */}
         <div className="mapa-contenedor">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d173863.63517850495!2d-90.66457986858585!3d15.185289793942102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sau!4v1783026532754!5m2!1ses!2sau"
            width="100%" height="250" loading="lazy" title="Mapa de ubicación" style={{border: 0, borderRadius: '8px', marginTop: '20px'}}>
          </iframe>
        </div>
      </section>

    </div>
  );
}

export default Inicio;