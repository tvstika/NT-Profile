import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/Skill/Skill";

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Hero/>
      </div>
      <About/>
    </div>
  );
}

export default App;