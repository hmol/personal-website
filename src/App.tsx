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
        
        <div className="header">
          > Hi! I'm Henrik <span>👋</span>
        </div>
        
        {/* <img src={Face} className="face"></img>
         */}
        <div className="intro">
          I work as a fullstack developer. My main experience is with developing APIs in dotnet/c# with Angular in the frontend. 
          I also have a lot of experience setting up build and deployment pipelines.
          Currently I think nodejs, docker and graphql is exciting technologies that I try to learn more about.
          My current favourite developer environment consists of these vital parts: Ubuntu, Visual Studio Code, Rider, Docker and Git.
        </div>


        <Terminal></Terminal>
        <Projects></Projects>
     
        <ContactInfo></ContactInfo>
      </div>
    </div>
  );
}

export default App;
