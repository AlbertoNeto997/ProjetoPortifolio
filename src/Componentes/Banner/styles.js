import styled from 'styled-components'

export const BannerContainer = styled.body`

height: 600px;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(19,21,79,1) 100%);  
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content:space-evenly;
    
    nav{
        margin-right: 50px;
        margin-left: 50px;
    }
    
    h1{
        text-decoration: none;
        color: white;
        font-size: 70px;
        text-align: center;
        color:yellow;
    }

    h4{
        text-decoration: none;
        color: white;
        font-size: 20px;
        text-align: center;
        margin-bottom: 10px;
    }

    p {
        color: white;
        font-size: 20px;
        text-align: center;
        margin-left:auto;
        margin-right:auto;
        margin-bottom:20px;
        max-width:400px;
          
      }

    a{
        text-decoration: none;
        color: #20dbcd;
        text-align: justify;
        font-size:20px;
        cursor: pointer;
        
            &:hover{
                color: white;
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
        width:450px;
        height: 450px;
        margin-top: 30px;
    }
`;

export const Button = styled.section`
    display:flex;
    justify-content:space-evenly;
    
    div{
        align-items:center;
        text-align:center;
        border-radius:20px 20px 20px 20px;
        height:40px;
        width:120px;;
        background-color:#123855;
        padding:5px;
    }
`;