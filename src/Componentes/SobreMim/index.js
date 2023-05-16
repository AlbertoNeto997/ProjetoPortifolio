import React from "react";
import * as C from "../SobreMim/styles";
import Teste from "./teste";

export default function SobreMim() {
  return (
    <>
      <C.SobreMimContainer>
        <body>
          <div>
            <h2>Sobre Mim</h2>

            <p>
              Olá, sou estudante de Análise e Desenvolvimento de Sistemas na
              Universidade UniAmérica (Descomplica). Meu primeiro contato com
              programação ocorreu em 2021. Antes da área de TI, fiz mestrado em
              química pela UFAM e graduação em Química pela universidade
              Fametro. No momento sigo me aperfeiçoando em desenvolvimento web.
              Busco a primeira oportunidade na ára Tech. Se está em busca de
              contratação ou parceria em desenvolvimento, entre em contato{" "}
              <a href="https://wa.link/2dgcwm" target="_blank">
                comigo aqui
              </a>
              .
            </p>
          </div>
          <div className="buttons">
          <C.divAcv>
            <main>
              <a href="../assets/cvalberto.pdf" download="">
                <p>Download CV</p>
              </a>
              <p />
            </main>
          </C.divAcv>
          <C.divAcv>
            <main>
              <a
                href="https://github.com/albertonsc"
                target="_blank"
                rel="noreferrer"
              >
                <p>GitHub</p>
              </a>
            </main>
          </C.divAcv>
          <C.divAcv>
            <main>
              <a
                href="https://www.linkedin.com/in/albertonasc/"
                target="_blank"
                rel="noreferrer"
              >
                <p>LinkedIn</p>
              </a>
            </main>
          </C.divAcv>
          </div>
        </body>

        <Teste />
      </C.SobreMimContainer>
    </>
  );
}
