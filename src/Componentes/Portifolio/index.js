import React from "react"; 
import * as C from './styled'
import ImageFinance from './financeiro'
import ImageBuscador from './buscador'
import ImageCalculadora from "./calculadora";
import ImageProgramando from './programando'

export default function Portifolio(){
    return(
        <>
        <C.PortifolioContainer>
        <h1>PORTIFÓLIO</h1>
         <nav>
            <div>
                <h4>CONTROLE FINANCEIRO</h4>
                <ImageFinance/>
                <a href="https://github.com/albertonsc/ControleFinanceiro" target="_blank"><p>Repositório</p></a>
            </div>
            <div>
                <h4>BUSCADOR DE CEP</h4>
                <ImageBuscador/>
                <a href="https://github.com/AlbertoNeto997/BuscadorDeCep" target="_blank"><p>Repositório</p></a>
             </div>
                         <div>
                <h4>AGUARDE</h4>
                <ImageProgramando/>
                <p>Em breve novidades</p>
             </div>
         </nav>
                
        </C.PortifolioContainer>
         </>
        )
}