import styled from "styled-components";

export const ServicesContainer = styled.div`
        background: white;
       width:100%;
       height:100%;

    a{
    margin-top:15px;
    margin-bottom:15px;
    margin-left:20px;
    margin-right:20px;  
    text-align: center;
    font-size: 18px;
    text-align: justify;
    };

      ul{
    display: flexbox;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
 
}
    
    li{
    min-width:80px;
    min-height:60px;
    width:300px;
    height:200px;
    max-width:300px;
    max-height:200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: white;
    border-style: groove;
    color: gray;
    background: transparent;
    border-radius:10px;
    font-size:max 20px;
    margin-bottom: 15px;
    margin-top:20px;
    margin-left:20px;
    margin-right:20px;
    transition-duration:0.3s;
    
    &:hover{
            color: black;   
            border: solid 3px gray;
            transition-duration: 0,1s;
            background-color:#EEE5DE;

 }
}
h3{
    text-align:center;
    padding:8px;
}
h2{
    text-align:center;
    font-size: 30px;
    padding:5px;
    color:gold;
    text-decoration: underline;
    }

    button{
        min-width: 150px;
        border: solid 3px gold;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        background-color: transparent;
        border-radius:45px;
        font-size:15px;
        padding: 10px 15px;
        margin: 0 auto;
        margin-bottom: 50px;
        margin-top:20px;
        transition-duration:0.5s;

        &:hover{
            color: white;
           background-color: gold;
           
`;