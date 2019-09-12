import React from 'react';
import Face from'./face.jpg';
import './App.scss';
import Terminal from './Components/Terminal/Terminal';
import Projects from './Components/Projects/Projects';
import Links from './Components/Links/Links';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <img src={Face} className="face"></img> 
        <div className="header">
        > Hi! I'm Henrik <span>👋</span>
        </div>
        <p className="intro-sub">
          I work as a fullstack developer and I get satisfaction from having the responsibility for a software feature and developing it all the way from the database up to the GUI (usually html/css). 
        </p>
        <p className="intro-sub">
          My main experience is with developing REST APIs in dotnet with Angular in the frontend. 
          Currently I think nodejs, docker and graphql are exciting technologies that I will try to learn more about.
          My preferred dev-environment consists of these vital parts: Ubuntu, Visual Studio Code, Rider, Docker and Git.
        </p>

        <Terminal></Terminal>
        <Projects></Projects>
        <h2>Some thoughts on software development</h2>
        <p className="intro-sub">
          <h3>Readable code</h3>
          Code is often written one time and read a countless times. This is why I like readable code.
        </p>
        <p className="intro-sub">
          <h3>Test driven development</h3>
          I like having unit tests for the most businiss crucial functions in the system. In my experience these tests will also serve as a form of documentation and force the developer to write readable code. I do not like is extreme TDD where the goal is 100% testcoverage. It is utopia and impossible to maintain.  
        </p>
        <p className="intro-sub">
        <h3>KISS</h3>
          Keep it simple stupid is my main mantra. This is because it is so easy to do overengineering in software development. It is important to remember that simpler is always better. The developer should always think twice before introducing a new pattern.
        </p>

        <Links></Links>
      </div>
    </div>
  );
}

export default App;
