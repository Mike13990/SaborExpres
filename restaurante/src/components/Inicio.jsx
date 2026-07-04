import React from 'react';
import hamburguesa from "../assets/menus/hamburguesa-clasica.jpg";
import promoVideo from "../assets/video/promo.mp4";

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
          <img src={hamburguesa} alt="Hamburguesa Gigante" />
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
            <p>Zona 10, Ciudad de Guatemala, Guatemala. Te esperamos en nuestra sucursal principal.</p>
          </div>
          <div className="item-contacto">
            <span className="icono">📞</span>
            <h4>Llámanos</h4>
            <p>Teléfono: (+502) 2500-9999<br/>Atención de Lunes a Domingo de 9:00 am a 11:00 pm.</p>
          </div>
          <div className="item-contacto">
            <span className="icono">✉️</span>
            <h4>Escríbenos</h4>
            <p>contacto@saborexpress.com<br/>Respondemos todas tus dudas al instante.</p>
          </div>
        </div>

        {/* Mapa de ubicación */}
         <div className="mapa-contenedor">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22160.99536734608!2d-90.5206280059961!3d14.594467978408769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a3b921620f17%3A0xde5b4992ae81f907!2sZona%2010%2C%20Cdad.%20de%20Guatemala%2001010!5e1!3m2!1ses-419!2sgt!4v1783137086937!5m2!1ses-419!2sgt"
            width="100%" height="250" loading="lazy" title="Mapa de ubicación" style={{border: 0, borderRadius: '8px', marginTop: '20px'}}>
          </iframe>
        </div>
        <div className='video-promocional'>
          <video src={promoVideo} controls autoPlay loop 
            style={{ width: '100%', borderRadius: '10px', marginTop: '20px' }}/>
        </div>
      </section>

    </div>
  );
}

export default Inicio;