import React from 'react';
import './Face.scss';


class Face extends React.Component<any, any> {
    myRef: React.RefObject<any> = React.createRef();

    constructor(props: any) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
                <div className={(this.props.displayStats ? 'face-terminator' : 'face')} 
                     onClick={this.props.handler}
                     title={(this.props.displayStats ? 'Terminator' : 'Henrik')} >
                </div>
                {this.props.displayStats &&
                    <div className="red-eye" style={{top: this.state.top, left: this.state.left}}></div>
                }
            </div>
        );
    }
}

export default Face;