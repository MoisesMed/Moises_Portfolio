import ReactGA from 'react-ga';
import Routes from "./routes/Routes";
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from "./components/NavBar";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
`

export default function App() {
    ReactGA.initialize('G-BB7PQZKY80');
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <Router>
            <StyledLayout>
                <NavBar/>
                <Routes/>
            </StyledLayout>
        </Router>
    );
}