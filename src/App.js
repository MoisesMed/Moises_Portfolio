import ReactGA from "react-ga";
import Routes from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import styled, { ThemeProvider } from "styled-components";
import "./styles.css";
import { useState } from "react";

const StyledLayout = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export default function App() {
  ReactGA.initialize("G-BB7PQZKY80");
  ReactGA.pageview(window.location.pathname + window.location.search);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [themeColors, setThemeColors] = useState({
    backgroundColor: "#1d1d1d",
    backgroundSecondaryColor: "#2a2a2a",
    titleColor: "#e5e5e5",
    labelColor: "rgb(207, 207, 207)",
    strongColor: "rgb(97, 218, 251)",
  });

  const handleChangeTheme = () => {
    if (isDarkTheme) {
      setThemeColors({
        backgroundColor: "white",
        backgroundSecondaryColor: "#d7d7d7",
        titleColor: "black",
        labelColor: "rgb(207, 207, 207)",
        strongColor: "rgb(97, 218, 251)",
      });
    } else {
      setThemeColors({
        backgroundColor: "#1d1d1d",
        backgroundSecondaryColor: "#2a2a2a",
        titleColor: "#e5e5e5",
        labelColor: "rgb(207, 207, 207)",
        strongColor: "rgb(97, 218, 251)",
      });
    }
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={themeColors}>
      <Router>
        <StyledLayout>
          <NavBar
            isDarkTheme={isDarkTheme}
            handleChangeTheme={handleChangeTheme}
          />
          <Routes />{" "}
        </StyledLayout>
      </Router>
    </ThemeProvider>
  );
}
