
import React from 'react';
import './Links.scss';

class Links extends React.Component  {
    render() {

        return (
			<div className="contact">
				<h2>Links</h2>
				<div className="links">				
					<a href="mailto:molnes@gmail.com">Mail</a>
					<a href="https://www.linkedin.com/in/henrikmolnes">LinkedIn</a>
					<a href="https://github.com/hmol">Github</a>
					<a href="https://github.com/hmol/writings">Writings</a>
				</div>
		  	</div>
        );
    }
}

export default Links;