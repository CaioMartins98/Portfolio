import React from "react";

import {
  Container,
  ContainerDescriptionImg,
  ContainerImg,
  Description,
  DescriptionContainer,
  DescriptionImg,
  GifContainer,
  InfoContainer,
  IntroductionBold,
  IntroductionContainer,
  Main,
  ViewCV,
  ViewCVContainer,
} from "./styles";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";

import perfil from "../../assets/me.png";
import { Link } from "@mui/material";

const Intro: React.FC = () => {
  return (
    <Container>
      <Main>
        <ContainerImg>
          <GifContainer />
          <ContainerDescriptionImg>
            <DescriptionImg>
              Desenvolvedor Front-end, 24, Juiz de Fora - MG{" "}
            </DescriptionImg>
            <img
              alt="Brasil"
              height={25}
              src={require("../../assets/brasil.png")}
              style={{ marginTop: "-3px" }}
            />
          </ContainerDescriptionImg>
        </ContainerImg>
        <InfoContainer>
          <IntroductionContainer>
            <IntroductionBold>Olá! Eu sou o Caio 👋</IntroductionBold>
          </IntroductionContainer>

          <DescriptionContainer>
            <Description>
              Sou apaixonado por tecnologia, especialmente por desenvolvimento
              web e mobile. Atualmente trabalho como desenvolvedor
              front-end/mobile, utilizando todo o ecossistema moderno de
              desenvolvimento com React e React Native. Integrei equipes de
              desenvolvimento com projetos para milhões/milhares de usuários dos
              mais diversos segmentos, com destaque para o setor de varejo e
              financeiro. Também tenho conhecimento em ferramentas de
              prototipação de interface, de alta e baixa fidelidade, que me
              auxiliam no dia a dia.
            </Description>
          </DescriptionContainer>
          <ViewCVContainer>
            <Link
              href="https://drive.google.com/file/d/17XbYhPnkhmLsoA-xFszotM6mCUP08C82/view?usp=sharing"
              underline="none"
              target="_blank"
            >
              <ViewCV>Currículo</ViewCV>
            </Link>
          </ViewCVContainer>
        </InfoContainer>
      </Main>
    </Container>
  );
};

export default Intro;
