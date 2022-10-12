import React from 'react'
import * as C from '../Menu/styles'



export default function Menu ( ) {
    return(

        <C.ContainerMenu>
            <ul>
                <li><a href='../Banner/index.js'>Home</a></li>
                <li><a href="../SobreMim/index.js">Sobre Mim</a></li>
                <li><a href="../Servicos/index.js">Experiências</a></li>
                <li><a href="../Portifolio/index.js">Portifólio</a></li>
            </ul>
        </C.ContainerMenu>

    )
}
