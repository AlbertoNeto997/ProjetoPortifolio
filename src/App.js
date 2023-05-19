import React from "react";
import Header from "./Componentes/Header/Index";
import GlobalStyle from "./styles";
import Banner from "./Componentes/Banner/index";
import SobreMim from "./Componentes/SobreMim";
import Experiencia from "./Componentes/Experiencia/index";
import Portfolio from "./Componentes/Portfolio/index";
import Footer from "./Componentes/footer/footer.js";

export default function App() {
  return (
    <>
      <div>
        <GlobalStyle />
        <Header />
        <Banner />
        <SobreMim />
        <Experiencia />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}
