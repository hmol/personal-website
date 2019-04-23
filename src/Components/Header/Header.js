import React from 'react';
import './Header.scss';
import Face from '../Face/Face';

class Header extends React.Component {
    render() {
        return (
        <div className="Header">
            <Face/>
            <div className="header-text">
                <h1 className="hello">Hello!</h1>
                <div className="intro">
                    <span>
                        I’m Henrik Molnes, a developer living in Oslo, currently working as a consultant at ITverket.<span className="cursor"></span>
                    </span>
                </div>
            </div>
        </div>
        );
    }
}

export default Header;