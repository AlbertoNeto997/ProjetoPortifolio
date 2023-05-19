import styled from "styled-components";

export const PortifolioContainer = styled.section`
    background: #0e3461;
    border-radius: 40px 40px 0px 0px;

    nav{
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    }
      
    }

    div{
        margin-left:50px;;
        margin-right:50px;;
        padding:15px;
        background-color: transparent;
        margin-bottom:50px;
        text-align:center;
        border-radius:20px;

        
 }
   
    a{
    text-align: center;
    font-size: 18px;
    text-align: center;
    text-decoration:none;
    color: white;
    transition:0,5s;
        :hover{
            color: black;
            transition:0,5s;
        }
    };
        h4{
    text-align:center;
    padding:8px;
    color:white;
    font-size:20px;
    @media (max-width: 1024px){
        font-size: 35px;
      }
    }
        h1{
    text-align:center;
    font-size: 45px;
    padding:20px;
    color:gold;

    @media (max-width: 1024px){
        font-size: 100px;
      }
    }
    p{
        color: white;
        font-size:18px;
        :hover{
            color: yellow;
            transition:0,5s;
            
    }

    @media (max-width: 1000px){
        font-size: 40px;
    }
`;   