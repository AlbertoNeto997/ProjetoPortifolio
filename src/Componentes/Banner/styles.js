import styled from 'styled-components'

export const BannerContainer = styled.body`

    height: 630px;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(19,21,79,1) 100%);  
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction:columns;

    
      div{
        margin-right: 50px;
        margin-left: 50px;
        z-index:10;
        text-align: center;
        
       
    }
    
    h1{
        text-decoration: none;
        color: white;
        font-size: 70px;
        margin-top:10px;
        margin-bottom:10px;
        text-align: center;
        color:yellow;
           }

    h4{
        text-decoration: none;
        color: white;
        font-size: 30px;
        margin-bottom: 20px;
        text-align: center;
    }
    p {
        color: white;
        font-size: 30px;
        text-align: center;
          
      }
    a{
        text-decoration: none;
        color: turquoise;
        text-align: justify;
        
        
           

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
        width:400px;
        height: 400px;
      //  border-radius:200px;
        margin-top: 30px;
    }
`;