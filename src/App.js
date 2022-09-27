import React from "react" 
import Header from "./Componentes/Header/Index"
import GlobalStyle from './styles'
import Services from './Componentes/Servicos/index'


export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Services/>
    </div>
);
};
