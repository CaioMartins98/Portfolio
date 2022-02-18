import styled from "styled-components";

export const ButtonContainer = styled.div`
  bottom: 6px;
  padding: 12px;
  position: fixed;

  height: 70px;

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
