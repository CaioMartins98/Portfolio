import styled from "styled-components";

export const Container = styled.div`
  height: 1000px;
  background: #222;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-size: 35px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;

  @media(min-width: 768px){
    font-size: 45px;
  }
`;

export const ExperienceContainer = styled.div`
  margin-top: 20px;

  @media(min-width: 768px){
    margin-top: 40px;
  }
`
