import "./App.css";
import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="overflow-hidden bg-bg">
      <Navbar />
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
