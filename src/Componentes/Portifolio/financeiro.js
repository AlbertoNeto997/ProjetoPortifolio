import React from 'react'
import Financeiro from '../../assets/Financeiro.png'
import styled from 'styled-components';

export default function ImageFinance ( ){

    const ImageFinanceiro = styled.nav`
       
       transition: 0.5s;

        :hover{
            transform: scale(1.3);
             transition: 0.5s;
        }
        img{
            width: 450px;
            height:250px;
        }
    `;
    
    return(
        <ImageFinanceiro>
        <a href="/">
            <img  src={Financeiro} alt="logo-dev"/>
        </a>  
        </ImageFinanceiro>
           
    )
}