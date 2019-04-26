import React from 'react';

export interface Props {
    url: string;
    text: string;    
}

class ContactItem extends React.Component<Props, object> {
    
    constructor(props: Props) {
        super(props);
    }

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

