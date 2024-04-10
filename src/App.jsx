import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <LandingPage/>
    </div>
  );
}

export default App;
