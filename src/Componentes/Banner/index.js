import React from 'react'
import * as C from '../Banner/styles'

export default function Banner() {
    return(
        <C.BannerContainer>
         <body>
           
          <div>
            <p>Olá, me chamo</p>
            
            <h1>Alberto Nascimento</h1>
            <h4>Desenolvedor web</h4>
            
            <p>Especializado em desenvolvimento web de temas personalizados. Se você chegou até aqui, seja bem-vindo. Em busca de contratação ou parceria em desenvolvimento, entre em contato <a href="https://wa.link/2dgcwm" target="_blank">comigo aqui</a>.</p>
            <button type="button">Download CV</button>
            </div>

            
        </body>
        </C.BannerContainer>
    )
}