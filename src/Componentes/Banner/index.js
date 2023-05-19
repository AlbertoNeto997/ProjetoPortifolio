import React from 'react'
import * as C from '../Banner/styles'
import Image from './image'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

export default function Banner() {
 
    return(
        <>
    <C.BannerContainer>

            <nav>
                <h2>Olá, me chamo</h2>
                <h1>Alberto Nascimento</h1>
                <h4>Desenvolvedor web</h4>
                <p>Sou um profissional com habilidades de desenvolvimento front-end baseado em JavaScript.
                    Faço uso de tecnologias como React.js e Next.js.
                </p>

                <C.Button>
                    <div> <a href="https://www.linkedin.com/in/albertonasc/" target="_blank" rel="noreferrer"> <BsLinkedin/> &nbsp; LinkedIn</a></div>
                    <div> <a href="https://github.com/Albertonsc" target="_blank" rel="noreferrer"><BsGithub/> &nbsp; Github</a></div>
                </C.Button>
            </nav>
        <Image/>
    </C.BannerContainer>

        </>
    )
}