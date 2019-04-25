import React from 'react';
import './Header.scss';
import Face from '../Face/Face';

class Header extends React.Component {

    temperatures = [];

    constructor(props) {
        super(props);
        this.state = {introtext: '', displayStats: false, milliseconds: Math.abs(new Date(), new Date(1985, 5, 28)), temperature: "36.51", tempIndex: 0};
        this.handler = this.handler.bind(this);
        this.updateStats = this.updateStats.bind(this);
    }

    handler() {
        this.setState((state) => ({
            displayStats: !state.displayStats,
        }), () => {
            if(this.state.displayStats) {
                this.updateStatsTimerId = setInterval(() => this.updateStats(), 500);         
            } else {
                clearInterval(this.updateStatsTimerId);
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
  
    setTemperatures() {
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

    componentDidMount() {       
        this.setTemperatures();
    }

    getTemperature() {
        return this.temperatures[this.state.tempIndex];
    }

    updateStats() {
        this.setState((state) => {
            return {
                milliseconds: Math.abs(new Date(), new Date(1985, 5, 28)),
                tempIndex: (state.tempIndex + 1 === this.temperatures.length) ? 0 : ++state.tempIndex,
                temperature: this.getTemperature()            
            }
        });
    }

    render() {
        return (
        <div className="Header">
            <Face handler={this.handler} displayStats={this.state.displayStats} />
            {!this.state.displayStats ? (
            <div className="header-text">
                <div className="intro">                      
                Hello, I’m Henrik! A developer living in Oslo currently working as a consultant at ITverket.
                <span className="cursor"></span>
                </div>
            </div>
            ) : (
                <div className="header-text">
                    <div className="stats">
                        <div className="line-0">
                            Carbon based lifeform
                        </div>
                        <div className="line-0">
                            Species: Homo Sapiens
                        </div>
                        <div className="line-0">
                            Subsistence: <a href="https://www.google.com/search?q=C8H10N4O2" target="_blank" rel="noopener noreferrer">
                            C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>
                            </a> 
                        </div>
                        <div className="line-0">
                            Age: { this.state.milliseconds } ms
                        </div>
                        <div className="line-0">
                            Height: 1900 mm
                        </div>
                        <div className="line-0">
                            Core temp: { this.state.temperature } °C
                        </div>
                    </div>
                </div>
            )}
        </div>
        );
    }
}

export default Header;