import React from 'react';
import './Face.scss';
import './face.jpg'

class Face extends React.Component {
    render() {
        return (
            <div className="face-container">
                <div className="face"></div>
            </div>
        );
    }
}

export default Face;