import React from 'react';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
        <div className="header">
        <h2>
            {this.props.text}
        </h2>
        </div>
        );
    }
}

export default Header;