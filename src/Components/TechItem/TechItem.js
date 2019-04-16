import React from 'react';
import './TechItem.scss';
import TrackVisibility from 'react-on-screen'; 


class TechItem extends React.Component {

    maxLevel = 6;
    dark = [];
    light = [];
    levelArray = [
            <div className="cursor-light" key="0"></div>,
            <div className="cursor-light" key="1"></div>,
            <div className="cursor-light" key="2"></div>,
            <div className="cursor-light" key="3"></div>,
            <div className="cursor-light" key="4"></div>,
            <div className="cursor-light" key="5"></div>
    ]
    // ms-sqlserver 12

    elements;

    constructor(props) {
        super(props);

        for (let index = 0; index < this.props.level; index++) {
            this.levelArray[index] = <div className="cursor-dark" key={index}></div>;
        }
    }

    maxlength = 13;
    getNameWithDots(name) {
        if(name.length == this.maxlength) {
            return name;
        }
        var remainer = this.maxlength - name.length;
        for (let index = 0; index < remainer; index++) {
            name += '.';
        }
        return name;
    }

    componentDidMount() {
        console.log("test balle");
    }
    
    render() {
        return (
                <div className="tech-item">
                    <div className="name">
                        {this.getNameWithDots(this.props.name)}
                    </div>
                    <TrackVisibility className="track-visibility-container">
                        {({ isVisible }) => 
                            isVisible ?
                            <div className="level">
                                { this.levelArray }
                            </div>
                            :   
                                <div className="level-empty">
                                </div>
                        }
                    </TrackVisibility>                  
                </div>        
        );
    }
}

export default TechItem;

// {({ isVisible }) => isVisible && 
// <div className="level">
//     {this.dark}
//     {this.light}
// </div>          
// }

// {this.dark}
// {this.light}