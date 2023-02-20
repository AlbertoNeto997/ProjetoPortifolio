import React from 'react'
import * as C from '../SobreMim/styles'
import Teste from './teste'

export default function SobreMim() {
 
    return(
        <>
    <C.SobreMimContainer>
              
        <body>
           
          <div>
                  
            <h2>Sobre Mim</h2>
            
            <p>Olá, sou estudante de Análise e Desenvolvimento de Sistemas na Universidade Descomplica. 
                Meu primeiro contato com programação ocorreu em 2021. Antes da área de TI, fiz  mestrado em química 
                pela Universidade Federal do Amazonas e licenciado pela universidade Fametro. 
                No momento sigo me aperfeiçoando em desenvolvimento web. 
            Busco a primeira oportunidade nessa nova área. Se está em busca de contratação ou parceria em desenvolvimento, 
            entre em contato <a href="https://wa.link/2dgcwm" target="_blank">comigo aqui</a>.</p>
            </div>
            <C.divAcv>
                
                <main>
                    <a href="../assets/cvalberto.pdf" download=""><p>DOWNLOAD CV</p></a><p/>
                </main>
            </C.divAcv><p/>
            <C.divAcv>
                <main>
                    <a href="https://github.com/Albertonsc" target="_blank"><p>GITHUB</p></a><p/>
                </main>
                
            </C.divAcv>
        </body>
        
        <Teste/> 
    </C.SobreMimContainer>
        
        </>
    )
}







