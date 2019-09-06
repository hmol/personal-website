import React from 'react';
import './Projects.scss';
import ProjectItem from './ProjectItem/ProjectItem';

class Projects extends React.Component {
    render() {
        return (
        <div className="projects">
            <h2>Projects</h2>
            <ProjectItem customer="Cenium" 
                 datestart="09/05/2019"              
                 text="Is part of a devops team at Cenium a ERP system for hotels built on dotnet."
				 technologies={['dotnet/c#', 'Azure', 'MSSQL Server', 'TeamCity', 'Octopus Deploy', 'Git', 'powershell']}>
            </ProjectItem>
            <ProjectItem customer="A confidential project" 
                    datestart="01/09/2016"
                    dateend="12/04/2019"
                    text="Worked as a fullstack developer creating a new CRM system for a business in a niche market. I had responsibility for developing a case management system. Development was done in dotnet core and Angular."
                    technologies={['Angular', 'dotnet/c#', 'scss', 'mongoDB', 'Google Cloud', 'bash', 'nservicebus', 'Git', 'docker', 'MSSQL Server']}>
            </ProjectItem>
            <ProjectItem customer="The norwegian goverment pension fund (SPK)" 
                    datestart="01/09/2015"
                    dateend="31/08/2016"
                    text="Participated in the development of a new loan application for the members of the SPK. React on the frontend and .NET on the backend. I was also part of a devops team and worked on maintenance of older systems and developing new functionality."
                    technologies={['React', 'ASP.NET/c#', 'Solr', 'Episerver', 'Octopus Deploy', 'TeamCity', 'Git', 'MSSQL Server']}>
            </ProjectItem>
            <ProjectItem customer="The norwegian goverment (Regjeringen)" 
                    datestart="01/03/2014"
                    dateend="01/04/2015"
                    text="Worked with a team of other developers to create the new regjeringen.no. Had, among other things, responsibility for the migration of the old content database, implementation of new search, import of government publications and the development of several page types. Technologies used: ASP.NET, Episerver, ElasticSearch"
                    technologies={['ASP.NET/c#', 'Episerver', 'ElasticSearch', 'MSSQL Server', 'Azure', 'Git']}>
            </ProjectItem>
            <ProjectItem customer="The norwegian parliament (Stortinget)" 
                    datestart="01/08/2012"
                    dateend="01/03/2014"
                    text="Took part of creating a new intranet for the Norwegian parliament. Developed several page types for Episerver, integrations against internal systems writen in ASP.NET/C# and a enterprise search."
                    technologies={['ASP.NET/c#', 'ElasticSearch', 'Powershell', 'Team City', 'MSSQL Server', 'Git']}>
            </ProjectItem>
        </div>
        );  }
}

export default Projects;