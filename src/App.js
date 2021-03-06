import { BrowserRouter as Router, Routes} from "react-router-dom";



//style
import './App.css';

//components
import Nav from "./components/nav/Nav";
import HeaderImage from "./components/HeadImage/HeadImage";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Carousel from "./components/carousel/carousel";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer/footer";



function App() {
  return (
    <Router>
      <div>
      <Routes>
      </Routes>
      </div>
      <HeaderImage/>
      <Nav/>
      <About/>
      <Skills/>
      <Carousel/>
      <Contact/>
      <Footer/>
    </Router>
  );
}

export default App;
