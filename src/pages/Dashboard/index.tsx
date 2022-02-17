import React, { useContext, useEffect, useState } from "react";
import Switch from "react-switch";
import { DefaultTheme, ThemeContext, ThemeProvider } from "styled-components";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import usePersistedState from "../../utils/usePersistedState";
import Experience from "../../components/Experience";
import Intro from "../../components/Intro";
import Education from "../../components/Education";
import Contact from "../../components/Contact";
import {
  ButtonContainer,
  ButtonField,
  Container,
  LinkField,
  LinksContainer,
  Title,
  TitleContainer,
} from "./styles";
import { Link, animateScroll as scroll } from "react-scroll";
import Tooltip from "@mui/material/Tooltip";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Fade from "react-reveal/Fade";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";

const Dashboard: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);
  const [show, setShow] = useState(false);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const ExperienceComponent = () => {
    return (
      <Fade left>
        <Experience />
      </Fade>
    );
  };

  const EducationComponent = () => {
    return (
      <Fade left>
        <Education />
      </Fade>
    );
  };

  const ContactComponent = () => {
    return (
      <Fade left>
        <Contact />
      </Fade>
    );
  };

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TitleContainer>
          <CodeIcon fontSize="large" />
          <Title>Caio Martins</Title>
          <CodeOffIcon fontSize="large" />
        </TitleContainer>
        <LinksContainer>
          <LinkField
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            to="experience"
          >
            Experiência
          </LinkField>
          <LinkField
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            to="education"
          >
            Formação
          </LinkField>
          <LinkField
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            duration={500}
            to="contact"
          >
            Contato
          </LinkField>
        </LinksContainer>
      </Container>
      <div id="intro">
        <Intro />
      </div>
      <div id="experience">{ExperienceComponent()}</div>

      <div id="education">{EducationComponent()}</div>

      <div id="contact">{ContactComponent()}</div>
      <Tooltip title="Ir para o topo" arrow placement="top-end">
        <ButtonContainer>
          <div></div>
          <ButtonField
            onClick={() => {
              scrollToTop();
              setTimeout(() => {
                document.location.reload();
              }, 1700);
            }}
          >
            <ExpandLessIcon sx={{ color: "#fff" }} fontSize="large" />
          </ButtonField>
        </ButtonContainer>
      </Tooltip>
    </ThemeProvider>
  );
};

export default Dashboard;
