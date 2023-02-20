import React from 'react';
import { Routes, BrowserRouter } from "react-router-dom"

import Header from "./Componentes/Header/Index";
import Experiencia from './Componentes/Experiencia/index';
import Portifolio from './Componentes/Portifolio/index';
import SobreMim from "./Componentes/SobreMim";
import Footer from './Componentes/footer/footer.js';


const Router = () => {
    return (

        <BrowserRouter>
          <Routes Component = { Header } path = "./Componentes/Header/Index.js" exact />  
          <Routes Component = { SobreMim } path = "./Componentes/SobreMim/index.js" /> 
          <Routes Component = { Experiencia } path = "./Componentes/Experiencia/index.js" /> 
          <Routes Component = { Portifolio } path = "./Componentes/Portifolio/index.js" /> 
          <Routes Component = { Footer } path = "./Componentes/footer/footer.js" /> 
      </BrowserRouter>
    )
}

export default Router;