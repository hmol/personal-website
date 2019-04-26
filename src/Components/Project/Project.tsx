import React from 'react';
import './Project.scss';

export interface Props {
    dateend?: string;
    datestart: string;
    url?: string;
    customer: string;
    about: string;
}

class Project extends React.Component<Props, object> {
    
    constructor(props: Props) {
        super(props);
    }

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

