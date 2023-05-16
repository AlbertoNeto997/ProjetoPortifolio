import React from 'react'
import Programando from '../../assets/programando.jpg'
import styled from 'styled-components';

export default function ImageProgramando ( ){

    const ImageCalculadora = styled.nav`
        transition: 0.5s;
        
        :hover{
            transform: scale(1.05);
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
            <img  src={Programando} alt="logo-dev"/>
        </ImageCalculadora>
           
    )
}