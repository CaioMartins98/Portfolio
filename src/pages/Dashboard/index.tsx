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

import Header from "../../components/Header";
import ButtonToTop from "../../components/ButtonToTop";

const Dashboard: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);
  const [show, setShow] = useState(false);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <Header experience="experience" education="education" contact="contact" />
      <div style={{ background: "#f5f5f5" }}>
        <div id="intro"> {<Intro />} </div>
        <div style={{ background: "#222" }} id="experience">
          {<Experience />}
        </div>
        <div id="education">{<Education />}</div>
        <div style={{ background: "#222" }} id="contact">
          {<Contact />}
        </div>
        <ButtonToTop />
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
