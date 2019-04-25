import React from 'react';

class ContactItem extends React.Component {
    render() {
        return (
        <div className="contact-item">
            <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                {this.props.text}
            </a>
        </div>
        );
    }
}

export default ContactItem;

