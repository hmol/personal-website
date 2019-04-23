import React from 'react';
import './Face.scss';
import './face.jpg'

class Face extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="face-container">
                <div className="face" onClick = {this.props.handler}></div>
                {/* <div className="red-eye"></div> */}
            </div>
        );
    }
}

export default Face;