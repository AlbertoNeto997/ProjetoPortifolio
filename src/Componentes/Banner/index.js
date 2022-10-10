import React from 'react'
import * as C from '../Banner/styles'
import Image from './image'

export default function Banner() {
 
    return(
        <>
    <C.BannerContainer>

        <Image/>
        <body>
        
            <div>
                <p>Olá, me chamo</p>
                <h1>Alberto Nascimento</h1>
                <h4>Desenvolvedor web</h4>

                <div>
                    <a href="https://wa.link/2dgcwm" target="_blank">WhatsApp</a> <p/>
                    <a href="https://www.linkedin.com/in/albertonasc/" target="_blank">LinkedIn</a><p/>
                    <a href="https://github.com/AlbertoNeto997" target="_blank">Github</a> <p/>
                </div>             
            </div>
                        
        </body>
    </C.BannerContainer>

        </>
    )
}