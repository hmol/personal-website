import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Terminal from './Components/Terminal/Terminal';
import Projects from './Components/Projects/Projects';
import ContactInfo from './Components/ContactInfo/ContactInfo';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          > Hi! I'm Henrik 👋
        </div>
        
        <div className="intro">
          I work as a fullstack developer. My main experience is with developing apis in dotnet/c# and Angular in the frontend. 
          Currently I think nodejs and graphql is exciting technologies that I try to learn more about.
        </div>

        <Terminal></Terminal>
        <Projects></Projects>
     
        <ContactInfo></ContactInfo>
      </div>
    </div>
  );
}

export default App;
