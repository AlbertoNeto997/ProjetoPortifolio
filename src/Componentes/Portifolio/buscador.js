import React from 'react'
import Buscador from '../../assets/Buscador.png'
import styled from 'styled-components';

export default function ImageFinance ( ){

    const ImageBuscador = styled.nav`
        transition: 0.5s;
        img:hover{
            transform: scale(1.1);
             transition: 0.5s;
        }
        img{
            width: 450px;
            height:250px;
            border-radius: 10px;
        }
    `;
    
    return(
        <ImageBuscador>
        <img  src={Buscador} alt="logo-dev"/>
        </ImageBuscador>
           
    )
}