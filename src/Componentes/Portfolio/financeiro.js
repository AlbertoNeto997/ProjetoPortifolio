import React from 'react'
import Financeiro from '../../assets/Financeiro.png'
import styled from 'styled-components';

export default function ImageFinance ( ){

    const ImageFinanceiro = styled.nav`
       
       transition: 0.5s;

        :hover{
            transform: scale(1.1);
             transition: 0.5s;
        }
        img{
            width: 450px;
            height:250px;
            border-radius: 10px;

            @media (max-width: 1000px){
                scale: 1.2;
                margin: 20px;
              }
        }
    `;
    
    return(
        <ImageFinanceiro>
            <img  src={Financeiro} alt="logo-dev"/>
        </ImageFinanceiro>
           
    )
}