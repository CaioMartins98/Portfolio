import styled from "styled-components";

export const Container = styled.div`
  height: 2550px;
  background: transparent;

 

  @media (min-width: 786px) {
    height: 1200px;
  }
`;
export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  padding: 20px;
  margin-bottom: 20px;

  @media (min-width: 786px) {
    margin-top: 20px;
  }
`;

export const Title = styled.p`
  font-family: "Poppins";
  font-size: 35px;
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
  
  @media (min-width: 786px) {
    font-size: 45px;
  }
`;

export const DescriptionContainer = styled.div`
  padding: 12px;
`;

export const Description = styled.p`
  font-size: 18px;
  font-family: "Poppins";
  padding: 12px;
  margin-bottom: 20px;

  @media (min-width: 786px) {
    display: none;
  }
`;
export const DescriptionBold = styled.p`
  font-size: 18px;
  font-family: "Poppins";
  font-weight: bold;
`;

export const Informations = styled.div`
  @media (min-width: 786px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 12px;

  @media (min-width: 786px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const CardEducation = styled.div`
  width: 460px;
  height: 250px;
  background: #222;
  border-top: 5px solid #777;
  border-bottom: 5px solid #777;
  border-radius: 4px;

  padding: 20px;
  @media (min-width: 786px) {
    width: 570px;
    height: 250px;
  }

  
`;

export const CardHeader = styled.p`
  font-family: "Poppins";
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
  padding: 12px;
`;

export const CardContent = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  padding: 12px;
`;

export const CardFooter = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  color: #d4d4d4;
  text-transform: uppercase;
  padding: 12px;
`;
export const CourseContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const Course = styled.div`
  width: 460px;
  height: 180px;
  border-top: 5px solid #777;
  border-bottom: 5px solid #777;
  border-radius: 4px;
  background: #222;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  padding: 12px;
  @media (min-width: 786px) {
    margin-left: 10px;
    width: 530px;
  }
  
`;

export const CoursesHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 200px;
`;

export const CoursesContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoursesHeaderTitleContainer = styled.p`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  min-width: 250px;
`;

export const CoursesHeaderTitle = styled.p`
  font-family: "Poppins";
  font-size: 18px;
  color: #333;
`;

export const Divider = styled.div`
  width: auto;
  margin-top: 20px;
  border-bottom: 0.5px solid #666;
`;

export const CourseName = styled.p`
  margin-top: 10px;
  font-family: "Poppins";
  font-size: 18px;
  color: #fff;
  font-weight: 600;
`;

export const CourseCompany = styled.p`
  margin-top: 5px;
  font-family: "Poppins";
  font-size: 16px;
  color: #f5f5f5;
`;

export const CourseCode = styled.p`
  margin-top: 5px;
  font-family: "Poppins";
  font-size: 14px;
  color: #f5f5f5;
  margin-bottom: 5px;
`;

export const CourseCertificate = styled.a`
  font-family: "Poppins";
  font-size: 14px;
  color: #f5f5f5;
  text-decoration: none;

  :hover {
    color: #0798f8;
  }
`;
