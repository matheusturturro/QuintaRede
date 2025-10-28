import React, { useEffect, useState } from "react";
import "./Carrossel.css";

import nomeImg from "../imagens/nome.png";
import imgVacinas1 from "../imagens/IMG-20241223-WA0043.jpg";
import imgVacinas2 from "../imagens/IMG-20241223-WA0096.jpg";
import imgWhatsapp20241221 from "../imagens/Imagem do WhatsApp de 2024-12-21 à(s) 19.13.37_06de670a.jpg";
import imgWhatsapp1704384242 from "../imagens/Imagem do WhatsApp de 2025-10-17 à(s) 17.04.38_4242a98b.jpg";
import imgWhatsapp170438d8372 from "../imagens/Imagem do WhatsApp de 2025-10-17 à(s) 17.04.38_d8372f59.jpg";
import imgWhatsapp17043913e12 from "../imagens/Imagem do WhatsApp de 2025-10-17 à(s) 17.04.39_13e12129.jpg";
import imgWhatsapp1704395da9 from "../imagens/Imagem do WhatsApp de 2025-10-17 à(s) 17.04.39_5da9ce5d.jpg";
import imgWhatsapp1704399c98 from "../imagens/Imagem do WhatsApp de 2025-10-17 à(s) 17.04.39_9c98c7d6.jpg";
import imgWhatsapp170439c73a from "../imagens/Imagem do WhatsApp de 2025-10-17 à(s) 17.04.39_c73ad7d3.jpg";
import imgWhatsapp1704404b33 from "../imagens/Imagem do WhatsApp de 2025-10-17 à(s) 17.04.40_4b33f084.jpg";
import imgWhatsapp170440df7f from "../imagens/Imagem do WhatsApp de 2025-10-17 à(s) 17.04.40_df7f7715.jpg";

function Carrossel({ intervalo = 5000 }) {
  const imagens = [
    { src: nomeImg, alt: "Identidade da Agro Pet" },
    { src: imgVacinas1, alt: "Equipe aplicando vacina em gado" },
    { src: imgVacinas2, alt: "Produtos de nutrição animal organizados" },
    { src: imgWhatsapp20241221, alt: "Kits de vacinação disponíveis" },
    { src: imgWhatsapp1704384242, alt: "Atendimento personalizado no campo" },
    { src: imgWhatsapp170438d8372, alt: "Detalhe de suplementos e rações" },
    { src: imgWhatsapp17043913e12, alt: "Linha de produtos em exposição" },
    { src: imgWhatsapp1704395da9, alt: "Acessórios para animais expostos" },
    { src: imgWhatsapp1704399c98, alt: "Itens de bem-estar animal" },
    { src: imgWhatsapp170439c73a, alt: "Seleção de medicamentos veterinários" },
    { src: imgWhatsapp1704404b33, alt: "Bebedouros e utensílios rurais" },
    { src: imgWhatsapp170440df7f, alt: "Atendimento na loja Agro Pet" },
  ];

  const [indiceAtivo, setIndiceAtivo] = useState(0);

  useEffect(() => {
    const temporizador = setInterval(() => {
      setIndiceAtivo((indiceAnterior) =>
        indiceAnterior + 1 >= imagens.length ? 0 : indiceAnterior + 1
      );
    }, intervalo);

    return () => clearInterval(temporizador);
  }, [imagens.length, intervalo]);

  const irPara = (novoIndice) => {
    if (novoIndice < 0) {
      setIndiceAtivo(imagens.length - 1);
      return;
    }
    if (novoIndice >= imagens.length) {
      setIndiceAtivo(0);
      return;
    }
    setIndiceAtivo(novoIndice);
  };

  if (!imagens.length) {
    return null;
  }

  return (
    <section className="carrossel-container" aria-label="Carrossel de imagens">
      <div className="carrossel-janela">
        <div
          className="carrossel-faixa"
          style={{ transform: `translateX(-${indiceAtivo * 100}%)` }}
        >
          {imagens.map((imagem) => (
            <figure className="carrossel-slide" key={imagem.src}>
              <img src={imagem.src} alt={imagem.alt} loading="lazy" />
            </figure>
          ))}
        </div>
        <button
          type="button"
          className="carrossel-botao carrossel-botao--anterior"
          onClick={() => irPara(indiceAtivo - 1)}
          aria-label="Ver imagem anterior"
        >
          ‹
        </button>
        <button
          type="button"
          className="carrossel-botao carrossel-botao--proximo"
          onClick={() => irPara(indiceAtivo + 1)}
          aria-label="Ver próxima imagem"
        >
          ›
        </button>
      </div>
      <div className="carrossel-indicadores" role="tablist">
        {imagens.map((imagem, indice) => (
          <button
            key={imagem.src}
            type="button"
            className={`carrossel-indicador${
              indice === indiceAtivo ? " carrossel-indicador--ativo" : ""
            }`}
            onClick={() => irPara(indice)}
            aria-label={`Ir para o slide ${indice + 1}`}
            aria-pressed={indice === indiceAtivo}
          />
        ))}
      </div>
    </section>
  );
}

export default Carrossel;
