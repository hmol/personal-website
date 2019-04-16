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
                 about="Bacon capicola pastrami burgdoggen filet mignon, chuck corned beef. Jerky corned beef buffalo, rump fatback kevin pig chicken ball tip drumstick pancetta. ">
        </Project>
        <Project customer="The norwegian goverment (Regjeringen)" 
                 datestart="01/03/2014"
                 dateend="01/04/2015"
                 about="Bacon capicola pastrami burgdoggen filet mignon, chuck corned beef. Jerky corned beef buffalo, rump fatback kevin pig chicken ball tip drumstick pancetta. ">
        </Project>
        <Project customer="The norwegian parliament (Stortinget)" 
                 datestart="01/08/2012"
                 dateend="01/03/2014"
                 about="Bacon capicola pastrami burgdoggen filet mignon, chuck corned beef. Jerky corned beef buffalo, rump fatback kevin pig chicken ball tip drumstick pancetta. ">
        </Project>
        </div>
        );
    }
}

export default Projects;