import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  width: 100%;
  background: #fff;
  color: #222;
  display: flex;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 1px 8px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  /* width: 440px; */
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 110px;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (min-width: 768px) {
    display: flex;

    width: 440px;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 12px;
`;

export const LinksContainer = styled.div`
  width: 100%;
  height: 110px;
  justify-content: space-around;
  align-items: center;
  display: flex;

  @media (min-width: 768px) {
    width: 700px;

    margin-left: 100px;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
  }
`;

export const LinkField = styled(Link)`
  font-family: "Montserrat";
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  &.${(props) => props.activeClass} {
    transition: width 0.8s;
    margin-top: 2px;
    border-bottom: 2px solid #222;
    border-top: 2px solid #222;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  bottom: 6px;
  padding: 12px;
  position: fixed;
  
  height: 70px;
  /* margin-left: 80%; */

  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
    display: flex;
    bottom: 6px;
    padding: 4px;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonField = styled.button`
  /* border: 3px solid black !important; */
  background: #000;
  border-radius: 4px;
  width: 40px;
  color: #fff;

  /* border: 1px solid #444; */
  border: none;
  height: 40px;
  cursor: pointer;
  transition: 0.4s;
  :hover {
    background: #999;
    color: #000;
  }
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
`;

export const ImgButton = styled.img`
  width: 40px;
  height: 40px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
