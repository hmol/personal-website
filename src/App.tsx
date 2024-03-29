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
          I work as a developer and I like to solve problems using technology.
          I'm most comfortable in the back-end side. That being said, I do get satisfaction from having the responsibility 
          for a software feature and developing it all the way from the database up to the GUI.
        </p>
        <p className="intro-sub">
          Most of my work experience the latest years has been related to REST APIs and also integration with other external systems, using <b>Python</b> and <b>C#</b>.
          My preferred dev-environment usually consists of these vital parts: Ubuntu, Visual Studio Code, Docker and Git.
        </p>
        <Terminal></Terminal>
        <Projects></Projects>
        <h2>Some thoughts on software development</h2>
        <p className="intro-sub"> 
          <h3>Readable code</h3>
          Code is often written one time and read a countless times. This is why I like readable code.
        </p>
        <p className="intro-sub">
          <h3>Tests</h3>
          Most of the code should ideally have good tests, and I like it when the tests are run as a part of the CI pipeline. 
          In my experience tests will also serve as a form of documentation to new developers and thus make the code more readable. 
        </p>
        <p className="intro-sub">
        <h3>KISS</h3>
          Keep it simple stupid is my main mantra. This is because it is so easy to do overengineering in software development. I will always try to start out simple and then do iterations, refractor and extend the code if necessary.
        </p>
        <Links></Links>
      </div>
    </div>
  );
}

export default App;
