import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 70px;
    background-color: black; 
    width:100%;
    box-shadow: 0px -10px 5px #60ffe4,0px 10px 5px #60ffe4;
    z-index:1;

    @media (max-width: 1000px){
        display: none;
   `;
   
    export const Container = styled.div`
        width: 100%;
        margin: 0 auto;
        padding: 20px 15px;


`;

export const ContainerMenu = styled.nav`

    ul{
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;

        li{
            margin-left: 30px;
            margin-right: 30px;
            p{
                text-decoration: none;
                color: white;
                font-size: 20px;
                cursor: pointer;
                transition-duration: 0.5s;

                
                &:hover{
                    color: #00cbff;
                    transition-duration: 0.2s;
                }
            }
        }
    
    }

`;
