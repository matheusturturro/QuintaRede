import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contato">
      <div className="footer-content">
        <div className="footer-location">
          <div className="footer-map">
            <iframe
              title="Mapa Quinta Rede"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2419185845486!2d-43.93966892513988!3d-22.902449141327664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f59b9136f0f%3A0x3dba399a097e68c4!2sPra%C3%A7a%20Mau%C3%A1%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1703151600000!5m2!1spt-BR!2sbr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="footer-text">
            <h3>Localização</h3>
            <p>Rua das Estrelas, 123</p>
            <p>Centro, Sertão Verde - MG</p>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contato</h3>
          <a href="mailto:contato@quintarede.com">contato@quintarede.com</a>
          <a href="tel:+5531999999999">+55 (31) 99999-9999</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
