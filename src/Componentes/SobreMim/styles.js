import styled from 'styled-components'


export const SobreMimContainer = styled.body`

    height: 700px;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(19,21,79,1) 100%);  
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img{
        width:400px;
        height: 400px;
        border-radius:200px;
        margin-top: 30px;
        margin-right:100px;
    }
    
    div{
        margin-right:50px;
        margin-left:100px;

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

    h2{
        text-decoration: none;
        color: white;
        font-size: 30px;
        margin-bottom: 20px;
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
        text-decoration:none;
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
        margin-top:20px;
        transition-duration:0.5s;
        cursor: pointer;

        &:hover{
            color: black;
            border: solid 1px #EEEEEE;
            background-color: beige;
        }
    }
   `;

    export const divAcv = styled.main`
        width:auto;
        max-width:250px;
        min-width: 10px;
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
        margin-bottom:20px;
        margin-top:20px;
        transition-duration:0.5s;
        cursor: pointer;
            &:hover{
                p{
                    color:black;
                }
                color: black;
                border: solid 1px #EEEEEE;
                background-color: beige;
        }

        
   `;
