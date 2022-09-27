import React from "react"; 
import * as C from '../Servicos/styles'

export default function Services(){
    return(
        <>
       <C.ServicesContainer>
        <div>
            <h2>SERVIÇOS</h2>
            <ul>
                <li>
                <a>
                    <h3>DESIGN + DESENVOLVIMENTO</h3>
                    Designs limpos e modernos - otimizados para desempenho, mecanismos de pesquisa e conversão de usuários em clientes.</a>
                </li>
                <li>
                    <a>
                        <h3>E-COMMERCE</h3>
                        Integração de plataformas de comércio eletrônico, gateways de pagamentos,     modelos de produtos personalizados e muito mais.
                    </a>
                </li>
                <li>
                    <a>
                        <h3>ANÁLISE</h3>
                        Obtenha informações sobre quem está navegando em seu site para que você possa tomar decisões de negócios mais inteligentes
                    </a>
                </li>
                <li>
                    <a>
                        <h3>RESPONSIVO</h3>
                        Um design responsivo torna seu site acessível a todos os usuários, independente do dispositivo
                    </a>
                </li>
                <li>
                    <a>
                        
                        <h3>AUDITORIA DE SITES</h3>
                        Procurando melhorar o desempenho da sua página, SEO ou experiência do usuário? Solicite uma auditoria gratuita do site.
                    </a>
                </li>
                <li>
                    <a>
                        <h3>GERENCIAMENTO DE CONTEÚDO</h3>
                        Tema WordPress personalizado e desenvolvimento de plugins. Atualize facilmente o conteúdo sem saber codificar.
                    </a>
                </li>
            </ul>
            <button>SAIBA MAIS</button>
        </div>
          
          
       </C.ServicesContainer>
        </>
    )
}