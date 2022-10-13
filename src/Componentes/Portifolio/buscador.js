import React from 'react'
import Buscador from '../../assets/Buscador.png'
import styled from 'styled-components';

export default function ImageFinance ( ){

    const ImageBuscador = styled.nav`
        transition: 0.5s;
        img:hover{
            transform: scale(1.3);
             transition: 0.5s;
        }
        img{
            width: 450px;
            height:250px;
        }
    `;
    
    return(
        <ImageBuscador>
        <a href="#">
            <img  src={Buscador} alt="logo-dev"/>
        </a>  
        </ImageBuscador>
           
    )
}