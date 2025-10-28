import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-tag">Nossa Jornada</span>
          <h1>Construindo confiança no campo, um parceiro por vez.</h1>
          <p>
            Fundada em 2008, a Agro Pet nasceu do entusiasmo de três produtores
            rurais que sonhavam em levar tecnologia e cuidado personalizado para
            cada propriedade. Começamos em um galpão simples, recebendo
            vizinhos, amigos e suas histórias. Ao longo dos anos, transformamos
            essa escuta em soluções completas: de diagnósticos de saúde animal a
            consultoria em sustentabilidade e produtividade.
          </p>
          <p>
            Hoje, a equipe da Agro Pet percorre o interior de Minas Gerais lado
            a lado com agricultores e criadores. Continuamos guiados pelos
            mesmos valores que nos motivaram no início: transparência,
            proximidade e inovação. Cada atendimento é a oportunidade de ajudar
            famílias a prosperar com responsabilidade e respeito à terra.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
