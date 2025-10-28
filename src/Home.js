import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Produtos from "./components/Produtos";
import Carrossel from "./components/Carrossel";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Produtos />
      <Carrossel />
      <Depoimentos />
      <Footer />
    </div>
  );
};

export default Home;
