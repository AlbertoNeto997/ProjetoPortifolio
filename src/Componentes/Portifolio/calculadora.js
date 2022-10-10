import React from 'react'
import Calculadora from '../../assets/Calculadora.png'
import styled from 'styled-components';

export default function ImageCalculadora ( ){

    const ImageCalculadora = styled.nav`
       
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
        <ImageCalculadora>
        <a href="#">
            <img  src={Calculadora} alt="logo-dev"/>
        </a>  
        </ImageCalculadora>
           
    )
}