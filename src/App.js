import { BrowserRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useMemo, useState } from "react";
import NavBar from "./components/NavBar";
import RouteAnalytics from "./components/RouteAnalytics";
import ScrollToTop from "./components/ScrollToTop";
import Routes from "./routes/Routes";
import "./styles.css";

const StyledLayout = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor};
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

export default function App() {
  const [themeName, setThemeName] = useState("dark");
  const isDarkTheme = themeName === "dark";

  const themeColors = useMemo(
    () => ({
      dark: {
        backgroundColor: "#1d1d1d",
        backgroundSecondaryColor: "#2a2a2a",
        titleColor: "#e5e5e5",
        labelColor: "rgb(207, 207, 207)",
        strongColor: "rgb(97, 218, 251)",
      },
      light: {
        backgroundColor: "#f5f5f5",
        backgroundSecondaryColor: "#d7d7d7",
        titleColor: "black",
        labelColor: "rgb(207, 207, 207)",
        strongColor: "#52b9d4",
      },
    }),
    []
  );

  const handleChangeTheme = () => {
    setThemeName((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={themeColors[themeName]}>
      <Router>
        <RouteAnalytics />
        <ScrollToTop />
        <StyledLayout>
          <NavBar
            isDarkTheme={isDarkTheme}
            handleChangeTheme={handleChangeTheme}
          />
          <MainContent>
            <Routes />
          </MainContent>
        </StyledLayout>
      </Router>
    </ThemeProvider>
  );
}
