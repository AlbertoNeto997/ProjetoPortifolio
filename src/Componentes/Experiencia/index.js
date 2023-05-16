import React from "react";
import * as C from "./styles";

export default function Experiencia() {
  return (
    <>
      <C.ExperienciaContainer>
        <div>
          <h2>EXPERIÊNCIAS</h2>
          <ul>
            <li>
              <a>
                <h3>DESENVOLVEDOR FRONT-END </h3>
                <h5>Projetos pessoais</h5>
                Desenvolvimento de aplicações web com uso de React.js <p/>
                1 ano de experiência
              </a>
            </li>
            <li>
              <a>
                <h3>DESIGN GRÁFICO</h3>
                <h5>Gráfica Caramuri</h5>
                Desenvolvimento de artes gráficas fazendo uso de CorelDraw.{" "}
                <p />2 anos de experiência
              </a>
            </li>
            <li>
              <a>
                <h3>TÉCNICO QUÍMICO</h3>
                <h5>Alvobras Químicos</h5>
                Desenvolvimento e manipulação de químicos.
                <p/>
                Coordenação de processos e garantia da qualidade.
                <p/>
                1,5 anos de experiência
              </a>
            </li>

            <li>
              <a>
                <h3>PROFESSOR DE QUÍMICA</h3>
                <h5>Reforço e Escolas</h5>
                Aulas de Química para alunos de nível médio, superior e
                vestibular.
                <p />7 anos de experiência.
              </a>
            </li>
          </ul>
        </div>
      </C.ExperienciaContainer>
    </>
  );
}
