import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Welcome from './components/Welcome/Welcome.js'
import About from './components/About/About.js'
import Tecnologies from './components/Tecnologies/Tecnologies.js'
import Projects from './components/Projects/Projects.js'

function App() {
  return (
    <div className="App" >
      <Header />
      <Welcome />
      <About />
      <Tecnologies />
      <Projects />
      <Footer />
    </div >
  );
}

export default App;
