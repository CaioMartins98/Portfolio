import React from "react";
import { ReactComponent as Book } from "../../assets/book.svg";
import {
  CardContainer,
  CardContent,
  CardEducation,
  CardFooter,
  CardHeader,
  Container,
  ContainerInfos,
  Course,
  CourseCertificate,
  CourseCode,
  CourseCompany,
  CourseName,
  CoursesContainer,
  CoursesHeader,
  CoursesHeaderTitle,
  CoursesHeaderTitleContainer,
  Description,
  Informations,
  Title,
  TitleContainer,
} from "./styles";
import courses from "../../utils/courses";
import { Grid } from "@mui/material";
import Reveal from "react-reveal/Reveal";

const Education = () => {
  return (
    <Container>
      <ContainerInfos>
        <TitleContainer>
          <Title>FORMAÇÃO</Title>
        </TitleContainer>
        <Informations>
          <CardContainer>
            <Description>
              Cursando Bacharelado em Sistemas de Informação no Instituto
              Federal do Sudeste de Minas Gerais Campus Juiz de Fora. Além
              disso, sempre me mantenho atualizado das tecnologias fazendo
              cursos e participando de mentorias.
            </Description>
            <Reveal>
              <CardEducation>
                <CardHeader>BACHAREL</CardHeader>
                <CardContent>Sistemas de Informação</CardContent>
                <CardContent>
                  Instituto Federal do Sudeste de Minas - Campus Juiz de Fora
                </CardContent>
                <CardFooter>2019-2023</CardFooter>
              </CardEducation>
            </Reveal>
          </CardContainer>
          <CoursesContainer>
            <CoursesHeader>
              <CoursesHeaderTitleContainer>
                <Book />
                <CoursesHeaderTitle>Cursos e certificados</CoursesHeaderTitle>
              </CoursesHeaderTitleContainer>
            </CoursesHeader>

            <Grid container spacing={2}>
              {courses.map((item) => (
                <Grid item xs={12} sm={10} md={6} lg={5} xl={4}>
                  <Reveal>
                    <Course>
                      <CourseName>{item.title}</CourseName>
                      <CourseCompany>{item.company}</CourseCompany>
                      <CourseCode>Código da credencial: {item.code}</CourseCode>
                      <CourseCertificate target="_blank" href={item.link}>
                        Certificado
                      </CourseCertificate>
                    </Course>
                  </Reveal>
                </Grid>
              ))}
            </Grid>
          </CoursesContainer>
        </Informations>
      </ContainerInfos>
    </Container>
  );
};

export default Education;
