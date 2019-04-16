import React from 'react';
import './Header.scss';
import Face from '../Face/Face';

class Header extends React.Component {
    render() {
        return (
        <div className="Header">
            <Face/>
            <div className="header-text">
                <div className="hello anim-typewriter">Hello!</div>
                <div className="intro">
                    <p>
                        I’m Henrik Molnes, a developer living in Oslo, currently working as a consultant at ITverket.<span className="cursor"></span>
                    </p>
                </div>
            </div>
        </div>
        );
    }
}

export default Header;