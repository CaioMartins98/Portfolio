import { Tooltip } from "@mui/material";
import React from "react";
import { ButtonContainer, ButtonField } from "./styles";
import { animateScroll as scroll } from "react-scroll";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const ButtonToTop = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Tooltip title="Ir para o topo" arrow>
      <ButtonContainer>
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
  );
};

export default ButtonToTop;
