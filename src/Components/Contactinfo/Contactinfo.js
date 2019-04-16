import React from 'react';
import './Contactinfo.scss';
import Header from '../Shared/Header/Header';
import ContactItem from './ContactItem/ContactItem';


class Contactinfo extends React.Component {
    getAge() {
        return new Date().getFullYear() - 1985;
    }

    render() {
        return (
        <div className="contactinfo">
            <Header text="About"></Header>
            <p>
            I'm {this.getAge()} years old and live in Oslo with my two sons and girlfriend. 
            After finishing a bachelor's degree in informatics the year 2012, I started working as a consultant for Making Waves.
            I worked on three projects with them, before I made the switch in 2016 to join ITverket where I am now. 
            </p>           
            <ContactItem text="Mail" url="mailto:molnes@gmail.com"></ContactItem>
            <ContactItem text="LinkedIn" url="https://www.linkedin.com/in/henrikmolnes/"></ContactItem>
            <ContactItem text="Github" url="https://github.com/hmol"></ContactItem>
            <div className="resume-container">
                <a href="https://github.com/hmol/Curriculum-Vitae/raw/master/molnes_cv.pdf" className="resume-link">
                    <span className="pdf-icon"></span>
                    Download resume
                </a>
            </div>
            
            <iframe src="https://open.spotify.com/embed/user/hmol_/playlist/4o8JeOveTdtRBXFGFmeKxY" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        );  }
}

export default Contactinfo;