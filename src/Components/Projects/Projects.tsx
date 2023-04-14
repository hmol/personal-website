import React from 'react';
import './Projects.scss';
import ProjectItem from './ProjectItem/ProjectItem';

class Projects extends React.Component {
    render() {
        return (
        <div className="projects">
            <h2>Projects</h2>
            <ProjectItem customer="Kron" 
                 datestart="01/12/2019"   
                 text="I'm currently working as a developer in the norwegian financial service named Kron. Here we try to make investments as simple as possible, with a strong focus on user experience. 
                 When I started it was more like an startup where I had many roles: maintenence, creating new features, integrations with external systems, setting up new environments. 
                 <br/> <br>I also worked on the frontend side with react-native and sometimes when «shit hit the fan» I also helped out customer support in the chat. 
                 The last years I have been more focused on the backend side of things,. 
                 Some of the things I have done in Kron: implementing <a href='https://www.shifter.no/nyheter/na-starter-pensjonskampen-knallstart-for-utfordreren-kron/201971'>EPK (Egen pensjonskonto)</a>, switching out the portfolio system we used with a new one,
                  creating a fund marketplace where customers can choose from over 500 funds instead of only a set of predefined packages.
                <br><br>
                Since the mantra in Kron always has been to put the customer first, we are quite proud of the fact that the app is the <a href='https://www.kode24.no/artikkel/kron-slar-tilbake-mot-app-kritikken-fra-shortcut-han-bommer/78883070'>highest rated financial app in Norway</a>."
		 technologies={['python', 'pytest', 'linux', 'postgres', 'circleci', 'celery', 'arq', 'linode', 'redis', 'nomad', 'bash', 'consul', 'metabase', 'retool', 'react', 'react-native', 'Git', 'BankID', 'Signicat/OIDC']}>
            </ProjectItem>
            <ProjectItem customer="Cenium" 
                 datestart="09/05/2019"   
                 dateend="29/11/2019"
                 employer="ITverket"           
                 text="I was part of a devops team at Cenium, that is a ERP system for hotels. Here I was responsible for regular maintenence work and implementing new features. For instance; I was responsible for creating support for a new type of key-cards that should work on all of the Nordic Choice hotels. "
		 technologies={['dotnet', 'C#', 'Azure', 'MSSQL Server', 'TeamCity', 'Octopus Deploy', 'Git', 'powershell', 'NUnit']}>
            </ProjectItem>
            <ProjectItem customer="A confidential project" 
                    datestart="01/09/2016"
                    dateend="12/04/2019"
                    employer="ITverket"
                    text="Worked as a fullstack developer creating a new CRM system for a business in a niche market. Amongst other things I had responsibility for developing the case management functions in this system. The REST API was built in dotnetcore adhering to the CQRS pattern. On the frontend side we used Angular."
                    technologies={['Google Cloud', 'nginx', 'Docker', 'CQRS', 'PostgreSQL', 'Angular', 'dotnet', 'C#', 'Scss', 'mongoDB', 'NServicebus', 'Git', 'NUnit', 'CircleCI', 'microservices']}>
            </ProjectItem>
            <ProjectItem customer="The norwegian goverment pension fund (SPK)" 
                    datestart="01/09/2015"
                    dateend="31/08/2016"
                    employer="Making Waves"
                    text="Participated in the development of a new loan application for the members of the SPK. React on the frontend and .NET on the backend. I was also part of a devops team here and worked on maintenance of older systems and developing new functionality."
                    technologies={['React', 'ASP.NET', 'C#', 'Solr', 'Episerver', 'Octopus Deploy', 'TeamCity', 'Git', 'MSSQL Server', 'NUnit']}>
            </ProjectItem>
            <ProjectItem customer="The norwegian goverment (Regjeringen)" 
                    datestart="01/03/2014"
                    dateend="01/04/2015"
                    employer="Making Waves"
                    text="Worked with a team of other developers to create the new regjeringen.no. Some of the tasks I took part in on this project was: migration of the old content database to a new one, implementation of the new search functions, import of government publications from an external system and the development of several cms-page types."
                    technologies={['Azure', 'Varnish', 'ElasticSearch', 'ASP.NET', 'C#', 'Episerver', 'MSSQL Server', 'Git', 'xUnit']}>
            </ProjectItem>
            <ProjectItem customer="The norwegian parliament (Stortinget)" 
                    datestart="01/08/2012"
                    dateend="01/03/2014"
                    employer="Making Waves"
                    text="Took part of creating a new intranet for the Norwegian parliament. Developed several cms-page types for Episerver, integrations against internal systems writen in ASP.NET/C# and a enterprise search."
                    technologies={['ASP.NET/c#', 'ElasticSearch', 'Powershell', 'Team City', 'MSSQL Server', 'Git']}>
            </ProjectItem>
        </div>
        );  }
}

export default Projects;