import React from "react";
import {
  Container,
  LinkField,
  LinksContainer,
  Title,
  TitleContainer,
} from "./styles";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";

const Header = ( {experience, education, contact} ) => {
  return (
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
          to={experience}
        >
          Experiência
        </LinkField>
        <LinkField
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-70}
          duration={500}
          to={education}
        >
          Formação
        </LinkField>
        <LinkField
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-70}
          duration={500}
          to={contact}
        >
          Contato
        </LinkField>
      </LinksContainer>
    </Container>
  );
};

export default Header;
