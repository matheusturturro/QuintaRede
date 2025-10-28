import React from "react";
import "./Depoimentos.css";

const depoimentos = [
  {
    empresa: "Fazenda Horizonte",
    texto:
      "A QuintaRede destrinchou nossos custos ambientais e produtivos. Agora priorizamos ações com base em dados e já reduzimos desperdícios em 25%.",
    nome: "Lucas Menezes",
    cargo: "Diretor de Operações",
    foto: "https://i.pravatar.cc/96?img=13",
  },
  {
    empresa: "AgroPlus",
    texto:
      "A equipe da Agro Pet nos apoia com dados claros e planos de ação objetivos. Ficou fácil decidir onde investir tempo e recursos.",
    nome: "João Silva",
    cargo: "Produtor Rural",
    foto: "https://i.pravatar.cc/96?img=12",
  },
  {
    empresa: "Fazenda Boa Vista",
    texto:
      "Finalmente temos um parceiro que traduz números em resultados. A gestão do rebanho ficou mais previsível e lucrativa.",
    nome: "Maria Oliveira",
    cargo: "Gestora de Operações",
    foto: "https://i.pravatar.cc/96?img=30",
  },
];

const Depoimentos = () => {
  return (
    <section className="depoimentos-section">
      <div className="depoimentos-header">
        <h2>Depoimentos</h2>
        <p>
          Histórias reais de quem já utiliza a Agro Pet para tomar
          decisõesmelhores no campo.
        </p>
      </div>
      <div className="depoimentos-grid">
        {depoimentos.map((depoimento, index) => (
          <div className="depoimento-card" key={index}>
            <span className="depoimento-empresa">{depoimento.empresa}</span>
            <p className="depoimento-texto">“{depoimento.texto}”</p>
            <div className="depoimento-perfil">
              <img
                src={depoimento.foto}
                alt={`Foto de ${depoimento.nome}`}
                className="depoimento-foto"
              />
              <div>
                <p className="depoimento-nome">{depoimento.nome}</p>
                <p className="depoimento-cargo">{depoimento.cargo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Depoimentos;
