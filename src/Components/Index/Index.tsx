import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header'
import Technologies from '../Technologies/Technologies'
import Projects from '../Projects/Projects'
import Contactinfo from '../Contactinfo/Contactinfo'
import Music from '../Contactinfo/Music/Music';
import './C64_Pro_Mono-STYLE.woff'
import './C64_Pro_Mono-STYLE.woff2'
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// https://medium.com/@ally_20818/multi-language-text-with-react-native-react-context-b76d5677346d
class App extends Component {

  componentDidMount() {
    console.log('I\'m sorry, Dave. I\'m afraid I can\'t do that.');

    axios.get('http://localhost:3001/')
      .then(function (response) {
        // handle success
        console.log(response);
      });
  }

  render() {
    return (
      <Router>
        <Route exact path="/" />

      </Router>
    );
  }
}

export default App;

