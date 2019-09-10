import React from 'react';
import Face from'./face.jpg';
import './App.scss';
import Terminal from './Components/Terminal/Terminal';
import Projects from './Components/Projects/Projects';
import ContactInfo from './Components/ContactInfo/ContactInfo';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <img src={Face} className="face"></img> 
        <div className="header">
        > Hi! I'm Henrik <span>👋</span>
        </div>
        <div className="intro">
          I work as a fullstack developer. My main experience is with developing REST-APIs in dotnet with Angular in the frontend. 
          Currently I think nodejs, docker and graphql is exciting technologies that I will try to learn more about.
          My preferred dev-environment consists of these vital parts: Ubuntu, Visual Studio Code, Rider, Docker and Git.
        </div>

        <Terminal></Terminal>
        <Projects></Projects>
        <h2>Thoughts</h2>
        <div className="intro">
         
          Code is often written one time and read a countless times. This is why I like readable code.
          I do not like 100% testcoverage. It is utopia and impossible to maintain. 
          On the other hand, I like having unit tests for the most businiss crucial functions in the system.           
          In my experience these tests will also serve as a form of documentation and force the developer to write readable code.
        </div>

        <ContactInfo></ContactInfo>
      </div>
    </div>
  );
}

export default App;
