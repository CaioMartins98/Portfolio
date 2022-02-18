import styled from "styled-components";

export const Container = styled.div`
  height: 1100px;
  
  background: transparent;
  @media (min-width: 768px) {
    height: 1250px;
  }
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

  @media (min-width: 768px) {
    font-size: 45px;
    margin-top: 30px;
  }
`;

export const ExperienceContainer = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const Company = styled.p`
  font-family: "Poppins";
  font-size: 20px;
  color: #fff;
`;

export const Occupation = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  color: #fff;
`;

export const Description = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  color: #fff;
`;
