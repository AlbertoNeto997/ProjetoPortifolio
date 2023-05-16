import React from "react";
import * as C from "./styled";
import ImageFinance from "./financeiro";
import ImageBuscador from "./buscador";
import ImageCalculadora from "./calculadora";
import BlogFoto from "./blog";
import ImageProgramando from "./programando";
import ImageSound from "./sound.js";

export default function Portifolio() {
  return (
    <>
      <C.PortifolioContainer>
        <h1>PORTIFÓLIO</h1>
        <nav>
          <div>
            <h4>CONTROLE FINANCEIRO</h4>
            <ImageFinance />
            <a
              href="https://github.com/albertonsc/ControleFinanceiro"
              target="_blank"
              rel="noreferrer"
            >
              <p>Repositório</p>
            </a>
          </div>
          <div>
            <h4>BUSCADOR DE CEP</h4>
            <ImageBuscador />
            <a
              href="https://github.com/AlbertoNeto997/BuscadorDeCep"
              target="_blank"
              rel="noreferrer"
            >
              <p>Repositório</p>
            </a>
          </div>
          <div>
            <h4>BLOG</h4>
            <BlogFoto />
            <a
              href="https://github.com/albertonsc/desafioalkabot"
              target="_blank"
              rel="noreferrer"
            >
              <p>Repositório</p>
            </a>
          </div>
          <div>
            <h4>SOUND PLAYER</h4>
            <ImageSound />
            <a
              href="https://github.com/albertonsc/Sound-Player"
              target="_blank"
              rel="noreferrer"
            >
              <p>Repositório</p>
            </a>
          </div>
          <div>
            <h4>CALCULADORA</h4>
            <ImageCalculadora />
            <a
              href="https://github.com/albertonsc/CalculadoraReact"
              target="_blank"
              rel="noreferrer"
            >
              <p>Repositório</p>
            </a>
          </div>
          <div>
            <h4>AGUARDE</h4>
            <ImageProgramando />
            <p>Em breve novidades</p>
          </div>
        </nav>
      </C.PortifolioContainer>
    </>
  );
}
