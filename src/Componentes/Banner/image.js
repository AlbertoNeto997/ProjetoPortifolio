import React from 'react'
import Logo from '../../assets/logodev.jpg'
import styled from 'styled-components';

export default function Image ( ){

    const ImageContainer = styled.div`
        
        :hover{
        //    -webkit-transform: scale(1.1);
            transform: scale(1.05);
            -webkit-transition: -webkit-transform .5s ease;
             transition: transform .5s ease;
             transition-duration: 0.5s;

        }
    `;

    return(
        <ImageContainer>

        <div>
            <img src={Logo} alt="logo-dev" />
        </div>

        </ImageContainer>
           
    )
}