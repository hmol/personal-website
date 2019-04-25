import React from 'react';
import './Face.scss';
import './face.jpg'

class Face extends React.Component {

    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.myRef = React.createRef();
        this.state = { top: '', left: '' };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    getTop() {
        var top = this.myRef.current.getBoundingClientRect().top;
        return top + (this.myRef.current.offsetHeight / 2);
    }
    getLeft() {
        var left = this.myRef.current.getBoundingClientRect().left;
        return left + (this.myRef.current.offsetWidth / 1.8);
    }
    updateWindowDimensions() {
        this.setState({ top: this.getTop() + 'px', left: this.getLeft() + 'px' });
    }

    render() {
        return (
            <div className="face-container" ref={this.myRef}>
                <div className="face" onClick={this.props.handler}></div>
                {this.props.displayStats &&                
                    <div className="red-eye" style={{top: this.state.top, left: this.state.left}}></div>
                }
            </div>
        );
    }
}

export default Face;