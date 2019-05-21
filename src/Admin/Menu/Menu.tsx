import React, { Component } from 'react';
import './Menu.scss';
import { Link, withRouter, BrowserRouter as Router } from 'react-router-dom';
import Auth from '../../Utils/Auth';

class Menu extends Component<any, any>  {

    constructor(props: any) {
        super(props);
        this.handleLogOutClick = this.handleLogOutClick.bind(this);
    }

    handleLogOutClick() {
        Auth.removeToken();
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="admin-menu">
                    <div className="menu-item"><Link to="/admin">Home</Link></div>
                    <div className="menu-item"><Link to="/admin/users">Users</Link></div>
                    <div className="menu-item"><Link to="/admin/projects">Projects</Link></div>
                    <div className="menu-item"><Link to="/admin/technologies">Technologies</Link></div>
                    <div className="menu-item"><Link to="/admin/texts">Texts</Link></div>
                    <div className="menu-item"><a onClick={this.handleLogOutClick}>Logout</a></div>
            </div>
        );
    }
}
    
export default withRouter(Menu);
    