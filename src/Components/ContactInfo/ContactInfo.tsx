
import React from 'react';
import './ContactInfo.scss';

class ContactInfo extends React.Component  {
    render() {

        return (
			<div className="contact">
				<h2>Contact</h2>
				<div className="contact-links">
					<a href="mailto:molnes@gmail.com">Mail</a>
					<a href="https://www.linkedin.com/in/henrikmolnes">LinkedIn</a>
					<a href="https://github.com/hmol">Github</a>
				</div>
		  	</div>
        );
    }
}

export default ContactInfo;