import React, { Component } from 'react';
import './Users.scss';
import Auth from '../../Utils/Auth';
import axios from 'axios';


export interface Props {
 
}

// export interface State {
//     users: string[];
//     displayForm: boolean;
//     email: string;
//     password: string;
// }


class Users extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
        this.state = {users: [], displayForm: false, email: '', password: ''};
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.loadUsers = this.loadUsers.bind(this);
    }

    handleInputChange(event: any) {
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

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers() {
        const instance = axios.create({
            baseURL: 'http://localhost:3001/api/',
            timeout: 1000,
            headers: {'Authorization': Auth.getToken()}
        });

        var self = this;

        instance.get('/users')
        .then(function (response) {
            var users = response.data as string[];
            console.log(users);
            self.setState({users: users})
        });
    }

    
    handleCreateClick() {
        this.setState({displayForm: false});

        const instance = axios.create({
            baseURL: 'http://localhost:3001/api/',
            timeout: 1000,
            headers: {'Authorization': Auth.getToken()}
        });

        let self = this;

        instance.post('/user', { username: this.state.email, password: this.state.password})
        .then(function (response) {
            console.log('user created');
            console.log(response);
            self.loadUsers();
        }, (error) => {
            console.log('error user created');
            console.log(error);
        });
    }
    
    handleRegisterClick() {
        this.setState({displayForm: true});
    }

    render() {
        return (
            <div className="users">
                    <h1>Users</h1>
                    <button onClick={this.loadUsers}>Update</button>
                    {this.state.users.map((user: string[], index: number) => <div key={index}>{user}</div>)}
                    <button onClick={this.handleRegisterClick}>
                        Register
                    </button>
                    {this.state.displayForm &&
                        <div>
                            Email: <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}/>
                            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}></input>
                            <button onClick={this.handleCreateClick}>Save</button>
                        </div>
                    }

            </div>
        );
    }
}
    
export default Users;
    