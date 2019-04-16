import React from 'react';
import './Technologies.scss';
import TechItem from '../TechItem/TechItem';
import Header from '../Shared/Header/Header';

class Technologies extends React.Component {
    
    display = { display: 'none'};

    constructor(props) {
        super(props); 
        if(props.isVisible) {
            this.display = {display: 'block'};
        }
    }

    render() {
        return (

            <div className="Technologies">
                    <Header text="Technologies"></Header>

                    <div className="techitems-container">
                        <div className="tech-items-column">
                            <TechItem name="dotnet" level="6"></TechItem>
                            <TechItem name="angular" level="5"></TechItem>
                            <TechItem name="react" level="3"></TechItem>                
                            <TechItem name="bash" level="4"></TechItem>
                            <TechItem name="powershell" level="4"></TechItem>
                            <TechItem name="linux" level="4"></TechItem>
                            <TechItem name="windows" level="6"></TechItem>
                            <TechItem name="git" level="4"></TechItem>
                        </div>
                        <div className="tech-items-column">
                            <TechItem name="ms-sqlserver" level="5"></TechItem>
                            <TechItem name="mongodb" level="4"></TechItem>
                            <TechItem name="docker" level="4"></TechItem>
                            <TechItem name="azure" level="4"></TechItem>
                            <TechItem name="google-cloud" level="3"></TechItem>
                            <TechItem name="nservicebus" level="5"></TechItem>
                            <TechItem name="bash" level="4"></TechItem>
                            <TechItem name="powershell" level="4"></TechItem>
                        </div>
                    </div>
            </div>
            );
    }
}

export default Technologies;