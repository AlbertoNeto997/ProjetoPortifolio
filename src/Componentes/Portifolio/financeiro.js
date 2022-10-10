import React from 'react'
import Financeiro from '../../assets/Financeiro.png'
import styled from 'styled-components';

export default function ImageFinance ( ){

    const ImageFinanceiro = styled.nav`
       
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
        <ImageFinanceiro>
        <a href="#">
            <img  src={Financeiro} alt="logo-dev"/>
        </a>  
        </ImageFinanceiro>
           
    )
}