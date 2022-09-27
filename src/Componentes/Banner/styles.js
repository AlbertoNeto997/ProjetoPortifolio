import styled from 'styled-components'


export const BannerContainer = styled.body`

    height: 500px;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(19,21,79,1) 100%);  
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    div{
        margin-right:200px;
        margin-left:200px;
        z-index:10;
       

    }
    h1{
        text-decoration: none;
        color: white;
        font-size: 45px;
     //   margin-right:0px;
       // margin-left:250px;
       margin-top:20px;
       
        text-align: center;
        color:yellow;
    }

    h4{
        text-decoration: none;
        color: white;
        font-size: 20px;
        margin-bottom: 20px;
     //   margin-right:20px;
       // margin-left:250px;
        text-align: center;
    }
    p {
        color: white;
        font-size: 20px;
       // margin-right:200px;
        //margin-left:400px;
        text-align: justify;
      }
    a{
        color: turquoise;
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

        &:hover{
            color: black;
            border: solid 1px #EEEEEE;
            background-color: beige;
        }
    }
   `;