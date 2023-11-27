import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skill/Skill";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Hero/>
      </div>
      <Skill/>
      <Portfolio/>
    </div>
  );
}

export default App;