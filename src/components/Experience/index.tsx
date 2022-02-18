import React, { useEffect, useState } from "react";

import { Container, ExperienceContainer, Title, TitleContainer } from "./styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as Icon } from "./react.svg";

const Experience = () => {
  return (
    <Container>
      <div>
        <TitleContainer>
          <Title>Experiência</Title>
        </TitleContainer>
        <ExperienceContainer>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#444", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #444 " }}
              date="04/2021 - 07/2021"
              iconStyle={{
                background: "#444",
              }}
              icon={<Icon />}
            >
              <h3 className="vertical-timeline-element-title">
                RBM - Sistemas Inteligentes
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {" "}
                Desenvolvedor Front-end - Estágio
              </h4>
              <p>
                Desenvolvimento de aplicações web e mobile para fintechs.
                Utilização da arquitetura Flux para o gerenciamento de estado
                com Redux e construí o front-end da aplicação com ReactJS.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#444", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #444 " }}
              date="07/2021 - 10/2021"
              iconStyle={{ background: "#444", color: "#fff" }}
              icon={<Icon />}
            >
              <h3 className="vertical-timeline-element-title">
                {" "}
                Segware do Brasil
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Desenvolvedor Front-end - Tempo Integral
              </h4>
              <p>
                Atuação em projeto para segurança eletrônica remota, com
                monitoramento em tempo real e controle de acesso. Utilização da
                arquitetura Flux para o gerenciamento de estado com Recoil.js e
                construí o front-end da aplicação com ReactJS e Typescript e
                testes com Jest e Cypress.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#444", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #444 " }}
              date="10/2021 - presente"
              iconStyle={{ background: "#444", color: "#fff" }}
              icon={<Icon />}
            >
              <h3 className="vertical-timeline-element-title"> Freelancer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Desenvolvedor Front-end - Tempo Integral
              </h4>
              <p>
                Desenvolvimento de aplicações web (landing pages, sites,
                sistemas web, spa) e mobile para clientes dos mais diversos
                tipos e segmentos.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </ExperienceContainer>
        {/* 
        <ExperiencesContainer>
          <Fade left>
            <CardExperience
              company="RBM Sistemas Inteligentes"
              title="Desenvolvedor Front-end - Estágio"
              date=" 04/2021 - 07/2021"
              image={rbm}
              description=" Desenvolvimento de aplicações web e mobile para fintechs. Utilização da
                              arquitetura Flux para o gerenciamento de estado com Redux e construí
                              o front-end da aplicação com ReactJS."
            />
          </Fade>

          <Fade right>
            <CardExperience
              company="Segware do Brasil"
              title="Desenvolvedor Front-end - Tempo Integral"
              date="07/2021 - 10/2021"
              image={segware}
              description=" Atuação em projeto para segurança eletrônica remota, com monitoramento em tempo 
                              real e controle de acesso. Utilização da arquitetura Flux para o gerenciamento de estado com Recoil.js e 
                              construí o front-end da aplicação com ReactJS e Typescript e testes com Jest e Cypress."
            />
          </Fade>
          <Fade left>
            <CardExperience
              company=" Freelancer"
              title="Desenvolvedor Front-end - Tempo Integral"
              date="10/2021 - atual"
              image={freela}
              description="Desenvolvimento de aplicações web (landing pages, sites, sistemas web, spa) e 
                             mobile para clientes dos mais diversos tipos e segmentos."
            />
          </Fade>
        </ExperiencesContainer> */}
      </div>
    </Container>
  );
};

export default Experience;
