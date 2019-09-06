import React, { Props } from 'react';
import './ProjectItem.scss';
import Technologies from './Technologies/Technologies';

class ProjectItem extends React.Component<ProjectItemProps> {

    render() {
        return (
			<div className="project">
				<h3>{this.props.customer}</h3>
				<p>{this.props.text}</p>
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
	technologies: string[]
}