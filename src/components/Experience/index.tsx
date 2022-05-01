import React from "react";

import {
  Company,
  Container,
  Description,
  ExperienceContainer,
  Occupation,
  Title,
  TitleContainer,
} from "./styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as Icon } from "../../assets/work.svg";

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
              <Company className="vertical-timeline-element-title">
                RBM - Sistemas Inteligentes
              </Company>
              <Occupation className="vertical-timeline-element-subtitle">
                Desenvolvedor Front-end - Estágio
              </Occupation>
              <Description>
                Desenvolvimento de aplicações web e mobile para fintechs.
                Utilização da arquitetura Flux para o gerenciamento de estado
                com Redux e construí o front-end da aplicação com ReactJS.
              </Description>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#444", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #444 " }}
              date="07/2021 - 10/2021"
              iconStyle={{ background: "#444", color: "#fff" }}
              icon={<Icon />}
            >
              <Company className="vertical-timeline-element-title">
                {" "}
                Segware do Brasil
              </Company>
              <Occupation className="vertical-timeline-element-subtitle">
                Desenvolvedor Front-end - Tempo Integral
              </Occupation>
              <Description>
                Atuação em projeto para segurança eletrônica remota, com
                monitoramento em tempo real e controle de acesso. Utilização da
                arquitetura Flux para o gerenciamento de estado com Recoil.js e
                construí o front-end da aplicação com ReactJS e Typescript e
                testes com Jest e Cypress.
              </Description>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#444", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #444 " }}
              date="10/2021 - 03/2022"
              iconStyle={{ background: "#444", color: "#fff" }}
              icon={<Icon />}
            >
              <Company className="vertical-timeline-element-title">
                {" "}
                Freelancer
              </Company>
              <Occupation className="vertical-timeline-element-subtitle">
                Desenvolvedor Front-end - Tempo Integral
              </Occupation>
              <Description>
                Desenvolvimento de aplicações web (landing pages, sites,
                sistemas web, spa) e mobile para clientes dos mais diversos
                tipos e segmentos.
              </Description>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#444", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #444 " }}
              date="03/2021 - atual"
              iconStyle={{ background: "#444", color: "#fff" }}
              icon={<Icon />}
            >
              <Company className="vertical-timeline-element-title">
                Gira
              </Company>
              <Occupation className="vertical-timeline-element-subtitle">
                Desenvolvedor Front-end Mobile - Tempo Integral
              </Occupation>
              <Description>
                Atuação em projeto de Marketplace B2B. Utilização da ferramenta
                React Native com arquitetura Flux para o controle de estado
                usando Redux.
              </Description>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </ExperienceContainer>
      </div>
    </Container>
  );
};

export default Experience;
