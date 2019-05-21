import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";
import './Login.scss';
// import styles from './Login.module.css';
import Auth from '../../Utils/Auth';

class Login extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {username: '', password: '', errorMessage: '', redirect: false};
        this.handleInputChange = this.handleInputChange.bind(this);
        if(Auth.isAuthenticated) {
            this.props.history.push('/admin');
        }
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
        if(Auth.isAuthenticated) {
            return;
        }

    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        if(Auth.isAuthenticated) {
            return;
        }
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
        if(Auth.isAuthenticated) {
            return;
        }
    }

    handleInputChange(event: any) {
        if(Auth.isAuthenticated) {
            return;
        }
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        if(this.state[name] === value) {
            return;
        }
        
        console.log('setState - handleInputChange');

        this.setState({
          [name]: value
        });
    }

    logIn() {
        if(Auth.isAuthenticated) {
            return;
        }

        if(!this.state.username) {
            this.setState({
                errorMessage: 'Username is missing'
            });
            return;
        } else if (!this.state.password) {
            this.setState({
                errorMessage: 'Password is missing'
            });
            return;
        }

        axios.post('http://localhost:3001/api/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then((response) => {
            Auth.setToken(response.data.token);
            this.forceUpdate();
            console.log('props.histry.push');
        }, (reason: any) => {
            this.setState({
                errorMessage: 'Coud not find username and/or password'
            });
        });
    }

    render() {
        if(Auth.isAuthenticated) {
            return (<Redirect to="/admin" />);
        }

        return (
            <div className="login">
            <div className="login-form">
                <div className="login-header">Login <span>🧙‍</span></div>
                <div>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="User"/>
                </div>
                <div>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />
                </div>
                
                {this.state.errorMessage &&
                    <div className="error">
                        {this.state.errorMessage}
                    </div>
                }

                <button onClick={() => this.logIn()}>
                    Log in
                </button>
            </div>
            </div>
        );
      }
}

export default withRouter(Login);
