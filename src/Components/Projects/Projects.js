import React from 'react';
import './Projects.scss';
import Project from '../Project/Project';
import Header from '../Shared/Header/Header';

class Projects extends React.Component {
    render() {
        return (
        <div className="Projects">
        <Header text="Projects"></Header>
        <Project customer="Confidential" 
                 datestart="01/09/2016"
                 about="Working with creating a new CRM system for a business in a niche market. ">
        </Project>
        <Project customer="The norwegian goverment pension fund (SPK)" 
                 datestart="01/09/2015"
                 dateend="31/08/2016"
                 about="Participated in the development of a new loan application system for the members of the SPK. I was also part of a devops team and worked on maintenance of older systems and developing new functionality.">
        </Project>
        <Project customer="The norwegian goverment (Regjeringen)" 
                 datestart="01/03/2014"
                 dateend="01/04/2015"
                 about="Worked with a team of other developers to create the new regjeringen.no. Had, among other things, responsibility for the migration of the old content database, implementation of new search, import of government publications and the development of several page types.">
        </Project>
        <Project customer="The norwegian parliament (Stortinget)" 
                 datestart="01/08/2012"
                 dateend="01/03/2014"
                 about="Took part of creating a new intranet for the Norwegian parliament. Developed several page types, integrations against internal systems, various forms and a enterprise search.">
        </Project>
        </div>
        );
    }
}

export default Projects;