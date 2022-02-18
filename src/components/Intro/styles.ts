import styled from "styled-components";
import perfil from "../../assets/me.jpg";

export const Container = styled.div`
  height: 1200px;
  width:auto;
  background: transparent;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 700px;
    width:auto;
  }
`;

export const Main = styled.div`
  height: 1100px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
`;

export const InfoContainer = styled.div`
  width: 450px;
  height: 600px;
  /* margin-bottom: 80px; */
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    width: 800px;
  }
`;

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  /* margin-top: 100px; */
  padding: 25px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
`;

export const IntroductionBold = styled.p`
  font-family: "Poppins";
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #000;
  font-size: 25px;
  color: #000;

  @media (min-width: 768px) {
    font-size: 34px;
  }

  /* font-weight: bold; */
`;

export const ContainerImg = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerDescriptionImg = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  margin-bottom: 100px;
  justify-content: space-around;
`;

export const DescriptionImg = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  margin-bottom: 130px;
  color: #999;
  margin-right: 10px;
  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const GifContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  margin-top: 20px;
  margin-bottom: auto;
  background-image: url(${perfil});
  background-size: cover;
  /* box-shadow: 0px 10px 40px rgba(1, 0, 0, 0.5); */
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
    margin-top: auto;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: auto;

  padding: 5px;
  margin-top: 50px;

  @media (min-width: 768px) {
    padding: 12px;
  }
`;

export const Description = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  padding: 22px;
  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 100px;
  }
`;

export const ViewCVContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewCV = styled.button`
  background: #000;
  margin-top: 50px;
  border-radius: 4px;
  color: #fff;
  border: none;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 14px;
  width: 120px;
  height: 40px;
  cursor: pointer;
  transition: 0.5s;
  text-transform: uppercase;
  border: 2px solid black !important;
  :hover {
    background: #fff;
    color: #000;
    transform: scale(1.1);
   
    font-weight: 500;
  }

  @media (min-width: 768px) {
    width: 160px;
    height: 50px;
    font-size: 16px;
    margin-bottom: 100px;
  }
`;
