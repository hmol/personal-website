import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Auth from '../../Utils/Auth';

class Logout extends Component<any, any> {
    constructor(props: any) {
        super(props);
        
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        Auth.removeToken();
    }

    render() {
        return (
            <div>
                <button onClick={this.logOut}>
                    Log out
                </button>
            </div>
        );
      }
}

export default Logout;
