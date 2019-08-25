import React from 'react';
import './Writings.scss';
import Header from '../Shared/Header/Header';

class Writings extends React.Component<any, any> {
    render() {
        return (

            <div className="Writings">
                    <Header text="Writings"></Header>
                    <p>
                        <a href="https://blogg.itverket.no/stateless-authentication-in-node">Building a Node API with stateless authentication</a>
                    </p>
                    <p>
                        <a href="https://blogg.itverket.no/cake/">Simplifying the build process with Cake</a>
                    </p>
            </div>
            );
    }
}

export default Writings;