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
                 employer="ITverket"           
                 text="I'm now part of a devops team at Cenium where we are working with an ERP system for hotels."
		 technologies={['dotnetcore/c#', 'Azure', 'MSSQL Server', 'TeamCity', 'Octopus Deploy', 'Git', 'powershell', 'NUnit']}>
            </ProjectItem>
            <ProjectItem customer="A confidential project" 
                    datestart="01/09/2016"
                    dateend="12/04/2019"
                    employer="ITverket"
                    text="Worked as a fullstack developer creating a new CRM system for a business in a niche market. I had responsibility for developing the case management functions in this system. Development was done in dotnetcore on the REST-api and Angular on the frontend."
                    technologies={['Google Cloud', 'nginx', 'Docker', 'PostgreSQL', 'Angular', 'dotnetcore/c#', 'Scss', 'mongoDB',  'Bash', 'NServicebus', 'Git', 'NUnit', 'CircleCI']}>
            </ProjectItem>
            <ProjectItem customer="The norwegian goverment pension fund (SPK)" 
                    datestart="01/09/2015"
                    dateend="31/08/2016"
                    employer="Making Waves"
                    text="Participated in the development of a new loan application for the members of the SPK. React on the frontend and .NET on the backend. I was also part of a devops team and worked on maintenance of older systems and developing new functionality."
                    technologies={['React', 'ASP.NET/c#', 'Solr', 'Episerver', 'Octopus Deploy', 'TeamCity', 'Git', 'MSSQL Server', 'NUnit']}>
            </ProjectItem>
            <ProjectItem customer="The norwegian goverment (Regjeringen)" 
                    datestart="01/03/2014"
                    dateend="01/04/2015"
                    employer="Making Waves"
                    text="Worked with a team of other developers to create the new regjeringen.no. Had, among other things, responsibility for the migration of the old content database, implementation of new search, import of government publications and the development of several page types. Technologies used: ASP.NET, Episerver, ElasticSearch"
                    technologies={['Azure', 'Varnish', 'ElasticSearch', 'ASP.NET/c#', 'Episerver', 'MSSQL Server', 'Git', 'xUnit']}>
            </ProjectItem>
            <ProjectItem customer="The norwegian parliament (Stortinget)" 
                    datestart="01/08/2012"
                    dateend="01/03/2014"
                    employer="Making Waves"
                    text="Took part of creating a new intranet for the Norwegian parliament. Developed several page types for Episerver, integrations against internal systems writen in ASP.NET/C# and a enterprise search."
                    technologies={['ASP.NET/c#', 'ElasticSearch', 'Powershell', 'Team City', 'MSSQL Server', 'Git']}>
            </ProjectItem>
        </div>
        );  }
}

export default Projects;