import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Welcome from './components/Welcome/Welcome.js'
import About from './components/About/About.js'
import Tecnologies from './components/Tecnologies/Tecnologies.js'
import Certificates from './components/Certificates/Certificates.js'
import Projects from './components/Projects/Projects.js'
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('G-BB7PQZKY80');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
  <div className="App" >
      <Header />
      <Welcome />
      <About />
      <Tecnologies />
      <Certificates />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
