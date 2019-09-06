
import React from 'react';
import './Technologies.scss';

class Technologies extends React.Component<TechnologiesProps>  {
    render() {

        const technologies = this.props.names.map((item: string) => <span>{item}</span>);
        
        return (
            <div className="technologies">
                {technologies}
            </div>
        );
    }
}

export default Technologies;


type TechnologiesProps = {
	names: string[]
}