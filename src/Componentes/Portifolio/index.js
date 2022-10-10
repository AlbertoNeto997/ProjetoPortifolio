import React from "react"; 
import * as C from './styled'
import ImageFinance from './financeiro'
import ImageBuscador from './buscador'
import ImageCalculadora from "./calculadora";

export default function Portifolio(){
    return(
        <>
        <C.PortifolioContainer>
        <h1>PORTIFÓLIO</h1>
         <nav>
            <div>
                <h4>CONTROLE FINANCEIRO</h4>
                <ImageFinance/>
                <a href="https://github.com/AlbertoNeto997/BuscadorDeCep" target="_blank"><p>Repositório</p></a>
            </div>
            <div>
                <h4>BUSCADOR DE CEP</h4>
                <ImageBuscador/>
                <a href="https://github.com/AlbertoNeto997/BuscadorDeCep" target="_blank"><p>Repositório</p></a>
             </div>
             <div>
                <h4>CALCULADORA</h4>
                <ImageCalculadora/>
                <a href="https://github.com/AlbertoNeto997/BuscadorDeCep" target="_blank"><p>Repositório</p></a>
             </div>
             <div>
                <h4>CALCULADORA</h4>
                <ImageCalculadora/>
                <a href="https://github.com/AlbertoNeto997/BuscadorDeCep" target="_blank"><p>Repositório</p></a>
             </div>
         </nav>
                
        </C.PortifolioContainer>
         </>
        )
}