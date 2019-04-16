import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header'
import Technologies from '../Technologies/Technologies'
import Projects from '../Projects/Projects'
import Contactinfo from '../Contactinfo/Contactinfo'

class App extends Component {

  render() {
    return ( 
      <div className="App">
        <Header></Header>
        <Projects></Projects>
        <Technologies></Technologies>
        <Contactinfo></Contactinfo>
      </div>
    );
  }
}

export default App;

