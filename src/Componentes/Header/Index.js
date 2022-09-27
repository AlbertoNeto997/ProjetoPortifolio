import React from "react";
import Menu from '../Menu/index';
import * as C from "./styles";
import Banner from '../Banner/index'

export default function Header (){
    return(
       <> <C.HeaderContainer>
            <C.Container>
            <div>
                <p>Alberto.js</p>
            </div>
            <Menu/>         
            </C.Container>
        </C.HeaderContainer>
        <Banner/>
        </>
    )       
}
