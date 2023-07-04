import "./app.scss"
import Intro from "./components/intro/Intro.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Menu from "./components/menu/Menu.jsx";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <Menu/>
      <div className="sections">
        <Intro/>  
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
