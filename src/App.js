import React, { Component } from "react";
import NavBar from "./components/Navbar";
import Background from "./components/Background";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import "./App.css";



class App extends Component {
 

  render() {
    
    return (
      <div className="App" >
    
     <ThemeSwitcher>
      <Background />
       
        <NavBar />
        <TitlesAndIcons />
        <AboutSection />
        <SkillSection />
        </ThemeSwitcher >
       
      </div>
    );
  }
}

export default App;
