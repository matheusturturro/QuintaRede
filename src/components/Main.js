import React from "react";
import "./Main.css";

function Main() {
  const handleScrollProdutos = () => {
    const target = document.getElementById("produtos");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="main-image-section">
      <div className="main-text-section">
        <div className="glass-box">
          <h1 className="primary-text">
            Cuidando do campo e dos seus animais com amor
          </h1>
          <button className="primary-button" onClick={handleScrollProdutos}>
            Conheça nossos produtos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;

//esta na home
