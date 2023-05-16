import styled from 'styled-components'
import Fundo from '../../assets/fundo01.jpg'

export const BannerContainer = styled.body`

    min-height: 500px;
    background-size:cover;
    background-image:url(${Fundo});
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content:space-evenly;
    
    @media (max-width: 1000px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
      }

    nav{
        margin-right: 50px;
        margin-left: 50px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    
    h1{
        text-decoration: none;
        font-size: 50px;
        text-align: center;
        color:#2072d8;

        @media (max-width: 1000px) {
            font-size: 100px;
        }
    }

    h2{
        color:black;
        font-size: 25px;
        text-align: center;

        @media (max-width: 1000px) {
            font-size: 60px;
        }
    }

    h4{
        text-decoration: none;
        color: black;
        font-size: 25px;
        text-align: center;
        margin-bottom: 10px;

        @media (max-width: 1000px) {
            font-size: 60px;
        }
    }

    p {
        color: black;
        font-size: 22px;
        text-align: justify;
        margin-left:auto;
        margin-right:auto;
        margin-bottom:20px;
        max-width: 500px;
          
        @media (max-width: 1000px){
            font-size: 50px;
            max-width: 100%
        }
      }

    a{
        text-decoration: none;
        color: white;
        text-align: justify;
        font-size:20px;
        cursor: pointer;

        
        
            &:hover{
                color: #00cbff;
                transition-duration: 0.5s;
            
    }
}

    button{
        min-width: 150px;
        border: solid 1px #dfa70c;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #eeeeee;
        background-color: transparent;
        border-radius:45px;
        font-size:15px;
        padding: 10px 15px;
        margin: 0 auto;
        margin-bottom: 90px;
        margin-top:20px;
        transition-duration:0.5s;
        cursor: pointer;

        &:hover{
            color: black;
            border: solid 1px #EEEEEE;
            background-color: beige;
        }
    }

    img{
        width: 500px;
        height: 500px;
        margin-top: 30px;

        @media (max-width: 1000px){
            display: none;
        }
    }

   
`;

export const Button = styled.section`
    display:flex;
    justify-content:space-evenly;
    
    div{
        display: flex;
        display-wrop: wrop;
        align-items:center;
        content-aligm: center;
        text-align: center;
        border-radius:20px;
        height:40px;
        width:120px;
        background-color:#123855;
        padding:5px;

        @media(max-width: 1000px) {
            width: 200px;
            height: 60px;
            border-radius:40px;
        }
    }

    a{
        padding: 10px;

       
    }

    spam{
        display: flex;
        margin: 0 auto;
        align-items: center;

        @media(max-width: 1000px) {
            scale: 1.4;
        }
    }

`;