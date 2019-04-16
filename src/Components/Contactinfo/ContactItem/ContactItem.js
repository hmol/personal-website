import React from 'react';

class ContactItem extends React.Component {
    render() {
        return (
        <div className="contact-item">
            <a href={this.props.url}>
                {this.props.text}
            </a>
        </div>
        );
    }
}

export default ContactItem;

