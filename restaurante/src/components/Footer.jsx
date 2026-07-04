function Footer() {
    return (
        <footer className="footer">
            <section className="info-footer">
                <h2>Restaurante Sabor Express</h2>
                <p>Dirección: Zona 10, Ciudad de Guatemala, Guatemala</p>
                <p>Teléfono: <a href="tel:+50225009999">(+502) 2500-9999</a></p>
                <p>Correo: <a href="mailto:contacto@saborexpress.com.gt">contacto@saborexpress.com.gt</a></p>
            </section>
            <section className="redes-footer">
                <h3>Redes sociales</h3>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                <span> | </span>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                <span> | </span>
                <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
            </section>
            <p>© 2026 Sabor Express. Todos los derechos reservados.</p>
        </footer>
    );
}
export default Footer;