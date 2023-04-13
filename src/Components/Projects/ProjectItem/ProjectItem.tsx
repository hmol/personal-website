import React, { Props } from 'react';
import './ProjectItem.scss';
import Technologies from './Technologies/Technologies';
import CalendarIcon from './calendar.svg';

class ProjectItem extends React.Component<ProjectItemProps> {
	render() {

		let dateString = this.props.datestart;
		if(this.props.dateend) {
			dateString += ' – ' + this.props.dateend;
		}
		let employer = ''
		if(this.props.employer) {
			employer = 'Employer: ' + this.props.employer;
		}

		return (
			<div className="project">
				<h3>{this.props.customer}</h3>
				<div className="date">
					<img src={CalendarIcon} className="calendar-icon"></img>
					{dateString}
				</div>
				<div className="employer">
					{employer}
				</div>
	
				<p dangerouslySetInnerHTML={{ __html: this.props.text }}></p>
				<Technologies names={this.props.technologies}></Technologies>
			</div>
        );  }
}

export default ProjectItem;

type ProjectItemProps = {
	customer: string,
	text: string,
	datestart: string,
	dateend?: string,
	technologies: string[],
	employer?: string
}