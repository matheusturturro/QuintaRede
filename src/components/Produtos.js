import React from "react";
import "./Produtos.css";

function Produtos() {
  const servicos = [
    {
      letter: "V",
      title: "Vacinação preventiva",
      description:
        "Planejamento completo para gado, equinos e pets com cronograma feito sob medida.",
      highlights: [
        "Aplicação segura e acompanhamento pós-vacina",
        "Controle do calendário sanitário da fazenda",
      ],
    },
    {
      letter: "R",
      title: "Rações e suplementos",
      description:
        "Linhas premium para todas as fases de crescimento, com suporte para escolher a dieta ideal.",
      highlights: [
        "Rações balanceadas e suplementos específicos",
        "Suporte técnico para manejo nutricional",
      ],
    },
    {
      letter: "A",
      title: "Acessórios e equipamentos",
      description:
        "Tudo para o dia a dia no campo: selas, bebedouros, coleiras e itens de bem-estar animal.",
      highlights: [
        "Seleção durável e pronta para uso intenso",
        "Ajuda especializada para montar seu kit",
      ],
    },
  ];

  return (
    <section className="produtos-section" id="produtos">
      <header className="produtos-header">
        <span className="produtos-badge">Nossos serviços</span>
        <h2>Soluções completas para cuidar da sua produção</h2>
        <p>
          Conheça o portfólio pensado para manter os animais saudáveis, bem
          alimentados e equipados, sem precisar listar preços. Converse com a
          nossa equipe e personalize o atendimento.
        </p>
      </header>

      <div className="produtos-grid">
        {servicos.map((servico) => (
          <article className="produto-card" key={servico.title}>
            <div className="produto-icon" aria-hidden="true">
              {servico.letter}
            </div>
            <h3>{servico.title}</h3>
            <p>{servico.description}</p>
            <ul className="produto-lista">
              {servico.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Produtos;
