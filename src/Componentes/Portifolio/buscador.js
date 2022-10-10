import React from 'react'
import Buscador from '../../assets/Buscador.png'
import styled from 'styled-components';

export default function ImageFinance ( ){

    const ImageBuscador = styled.nav`
       
        :hover{
        //    -webkit-transform: scale(1.1);
            transform: scale(1.05);
            -webkit-transition: -webkit-transform .5s ease;
             transition: transform .5s ease;
             transition-duration: 0.5s;
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