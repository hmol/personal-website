import React, { Component } from 'react';
import './Adminpanel.scss';
import Menu from '../Menu/Menu';
import { Route } from 'react-router-dom';
import Users from '../Users/Users';

class Adminpanel extends Component {

    Index() {
        return <h2>Home</h2>;
    }
    
    Projects() {
        return <h2>Projects</h2>;
    }
    
    Users() {
        return <Users></Users>;
    }

    Technologies() {
        return <h2>Technologies</h2>;
    }

    Texts() {
        return <h2>Texts</h2>;
    }

    render() {
        return (
            <div className="admin">               
                    <Menu></Menu>
                    <div className="main">
                        <Route path="/admin" exact component={this.Index} />
                        <Route path="/admin/users" component={this.Users} />
                        <Route path="/admin/projects" component={this.Projects} />
                        <Route path="/admin/technologies" component={this.Technologies} />
                        <Route path="/admin/texts" component={this.Texts} />
                    </div>
            </div>
        );
    }
}
    
export default Adminpanel;
    