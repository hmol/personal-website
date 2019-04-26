import React from 'react';
import './Header.scss';

export interface Props {
    text: string;    
}

class Header extends React.Component<Props, any> {

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