import React from 'react';
import './Project.scss';

class Project extends React.Component {
    render() {
        return (
        <div className="project">
            <div className="customer-container">
                <div className="customer-lead"></div>
                <div className="customer">
                {this.props.dateend ? (
                    <a href={this.props.url}>
                        {this.props.customer}
                    </a>
                ) : (
                    this.props.customer
                )}
                </div>
            </div>
            <div className="date-start-container">
                <span className="calendar-icon"></span>
                <div className="date-start">{this.props.datestart} </div>
                {this.props.dateend &&
                    <div className="date-end">
                        <span className="date-seperator">–</span>
                        {this.props.dateend}
                    </div>
                }
            </div>
            <div className="about-container">
                <div className="about-lead"></div>
                <div className="about">{this.props.about}</div>
            </div>
        </div>
        );
    }
}

export default Project;

