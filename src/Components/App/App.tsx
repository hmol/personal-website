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
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import Login from '../Login/Login';
import Adminpanel from '../../Admin/Adminpanel/Adminpanel';
import Auth from '../../Utils/Auth';
import Logout from '../Logout/Logout';
// import PrivateRoute from '../../Utils/PrivateRoute.js';

const PrivateRoute = ({component, isAuthenticated, ...rest}: any) => {
  if(!isAuthenticated) {
    return <Redirect to={{pathname: '/login'}}/>;
  }
  const routeComponent = (props: any) => (React.createElement(component, props));
  return <Route {...rest} component={routeComponent}/>;
};

class App extends Component {

  componentDidMount() {
    console.log('I\'m sorry, Dave. I\'m afraid I can\'t do that.');
  }

  index() {
    return <div className="app">
            <Header></Header>
            <Projects></Projects>
            <Technologies></Technologies>
            <Contactinfo></Contactinfo>
            <Music></Music> 
          </div>;
  }

  login() {
    return <Login></Login>;
  }

  logout() {
    return <div className="logout">
            <Logout></Logout>
           </div>;
  }

  adminpanel() {
    return <Adminpanel></Adminpanel>;
  }

  render() {
    return (
      <Router>
          <Switch>
            <Route path="/login" component={this.login} />
            <PrivateRoute path='/admin'
                          isAuthenticated={Auth.isAuthenticated}
                          component={this.adminpanel}/>
            <Route path="/" exact component={this.index} />
        </Switch>       
      </Router>
    );
  }
}

export default App;

