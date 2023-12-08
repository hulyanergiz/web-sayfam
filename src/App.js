import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";
import { useContext } from "react";
import { FetchContext } from "./contexts/FetchContext";
import { PulseLoader } from "react-spinners";
function App() {
  const { fetch } = useContext(FetchContext);
  return (
    <div className="App">
      {!fetch && (
        <div classame="spinner">
          <PulseLoader className="pulseLoader" />
        </div>
      )}
      {fetch && (
        <div>
          <Header />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
