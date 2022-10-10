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
            
            <p>Olá, sou mestre em química pela Universidade Federal do Amazonas e licenciado pela universidade Fametro. 
                Especializado em desenvolvimento web de temas personalizados. Se você chegou até aqui, seja bem-vindo. Em busca de contratação ou parceria em desenvolvimento, entre em contato <a href="https://wa.link/2dgcwm" target="_blank">comigo aqui</a>.</p>
            </div>
            <C.divAcv>
                
                <main>
                    <a href="../assets/cvalberto.pdf" download=""><p>DOWNLOAD CV</p></a><p/>
                </main>
            </C.divAcv><p/>
            <C.divAcv>
                <main>
                    <a href="https://github.com/AlbertoNeto997" target="_blank"><p>GITHUB</p></a><p/>
                </main>
                
            </C.divAcv>
        </body>
        
        <Teste/> 
    </C.SobreMimContainer>
        
        </>
    )
}