import React from 'react';
import './Header.scss';
import Face from '../Face/Face';

class Header extends React.Component {

    introtextFull = 'Hello! I’m Henrik Molnes, a developer living in Oslo, currently working as a consultant at ITverket.';
    temperatures = [];

    constructor(props) {
        super(props);
        this.state = {introtext: '', displayStats: false, milliseconds: Math.abs(new Date(), new Date(1985, 5, 28)), temperature: "36.51", tempIndex: 0};
        this.handler = this.handler.bind(this);
        this.updateStats = this.updateStats.bind(this);
        this.setIntrotext = this.setIntrotext.bind(this);
    }

    handler() {
        this.setState({
            displayStats: !this.state.displayStats,
            introtext: (this.state.introtext) ? '' : this.state.introtext,
            // tempIndex: (this.state.tempIndex) ? this.state.tempIndex : 0
        }, () => {
            if(this.state.displayStats) {
                this.updateStatsTimerId = setInterval(this.updateStats, 500);
                clearInterval(this.introtexttimerID);                
            } else {
                clearInterval(this.updateStatsTimerId);
                this.introtexttimerID = setInterval(this.setIntrotext, 20);
            }
        });
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    componentDidMount() {
        this.introtexttimerID = setInterval(this.setIntrotext, 20);
        for (var i = 0; i <= 109 ; i++) {
            if(i === 0) {
                this.temperatures[i] = "36.50";
                continue;
            }
            var last = this.temperatures[i-1];
            var newTemp = (parseFloat(last) + 0.01).toFixed(2);
            this.temperatures[i] = newTemp;
            
        }
        this.temperatures = this.shuffle(this.temperatures);
    }

    getTemperature() {
        return this.temperatures[this.state.tempIndex];
    }

    updateStats() {
        console.log('updateStats');        

        this.setState({
            milliseconds: Math.abs(new Date(), new Date(1985, 5, 28)),
            tempIndex: (this.state.tempIndex + 1 === this.temperatures.length) ? 0 : ++this.state.tempIndex,
            temperature: this.getTemperature()            
        }, () => {
            console.log('tempIndex ' + this.state.tempIndex);
        });
    }

    setIntrotext() {
        this.setState({
            introtext: (this.state.introtext !== this.introtextFull) 
                ? this.introtextFull.substring(0, this.state.introtext.length + 1) 
                : this.state.introtext
        });
    }

    render() {
        return (
        <div className="Header">
            <Face handler = {this.handler}/>
            {!this.state.displayStats ? (
            <div className="header-text">
                <div className="intro">                    
                    {this.state.introtext}<span className="cursor"></span>                    
                </div>
            </div>
            ) : (
                <div className="header-text">
                    <div className="stats">
                        <div className="stat-1">
                            Carbon based lifeform
                        </div>
                        <div className="stat-2">
                            Species: Homo Sapiens
                        </div>
                        <div className="stat-3">
                            Subsistence: <a href="https://www.google.com/search?q=C8H10N4O2" target="_blank">C8H10N4O2</a> 
                        </div>
                        <div className="stat-4">
                            Age: { this.state.milliseconds } ms
                        </div>
                        <div className="stat-5">
                            Height: 1900 mm
                        </div>
                        <div className="stat-6">
                            Core temperature: { this.state.temperature } °C
                        </div>
                    </div>
                </div>
            )}
        </div>
        );
    }
}

export default Header;