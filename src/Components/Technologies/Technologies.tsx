import React from 'react';
import './Technologies.scss';
import TechItem from '../TechItem/TechItem';
import Header from '../Shared/Header/Header';

class Technologies extends React.Component<any, any> {
    render() {
        return (

            <div className="Technologies">
                    <Header text="Technologies"></Header>

                    <div className="techitems-container">
                        <div className="tech-items-column">
                            <TechItem name="dotnet/c#" level={9}></TechItem>
                            <TechItem name="python" level={3}></TechItem>
                            <TechItem name="angular" level={7}></TechItem>
                            <TechItem name="react" level={5}></TechItem>                
                            <TechItem name="linux" level={5}></TechItem>
                            <TechItem name="windows" level={9}></TechItem>
                            <TechItem name="git" level={7}></TechItem>
                            <TechItem name="html/css" level={7}></TechItem>
                        </div>
                        <div className="tech-items-column">
                            <TechItem name="ms-sqlserver" level={9}></TechItem>
                            <TechItem name="mongodb" level={5}></TechItem>
                            <TechItem name="docker" level={4}></TechItem>
                            <TechItem name="azure" level={6}></TechItem>
                            <TechItem name="google-cloud" level={5}></TechItem>
                            <TechItem name="nservicebus" level={8}></TechItem>
                            <TechItem name="powershell" level={8}></TechItem>
                            <TechItem name="java" level={2}></TechItem>
                        </div>
                    </div>
            </div>
            );
    }
}

export default Technologies;