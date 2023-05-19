import React from "react";
import * as C from "./styles";

export default function Header() {
  return (
    <>
     
      <C.HeaderContainer>
        <C.Container>
          <C.ContainerMenu>
            <ul>
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>Sobre Mim</p>
              </li>
              <li>
                <p>Experiências</p>
              </li>
              <li>
                <p>Portifólio</p>
              </li>
            </ul>
          </C.ContainerMenu>
        </C.Container>
      </C.HeaderContainer>
    </>
  );
}
