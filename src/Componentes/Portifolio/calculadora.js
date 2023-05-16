import React from 'react'
import Calculadora from '../../assets/Calculadora.png'
import styled from 'styled-components';

export default function ImageCalculadora ( ){

    const ImageCalculadora = styled.nav`
        transition: 0.5s;
        
        :hover{
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
        <ImageCalculadora>
            <img  src={Calculadora} alt="logo-dev"/>
        </ImageCalculadora>
           
    )
}