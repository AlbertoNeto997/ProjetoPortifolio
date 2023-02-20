import React from "react" 
import Header from "./Componentes/Header/Index"
import GlobalStyle from './styles'
import Experiencia from './Componentes/Experiencia/index'
import Portifolio from './Componentes/Portifolio/index'
import SobreMim from "./Componentes/SobreMim"
import Footer from './Componentes/footer/footer.js'

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <SobreMim/>
      <Experiencia/>
      <Portifolio/>
      <Footer/>
    </div>
);
};
