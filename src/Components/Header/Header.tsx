import React from 'react';
import './Header.scss';
import Face from '../Face/Face';

export interface State {
    introtext: string;
    displayStats: boolean;
    milliseconds: number;
    temperature: string;
    tempIndex: number;
    audioloops: number;
}


class Header extends React.Component<any, State> {

    temperatures: string[] = [];
    updateStatsTimerId: NodeJS.Timeout;

    constructor(props: any) {
        super(props);
        this.state = {introtext: '', displayStats: false, milliseconds: Math.abs(new Date().getTime() - new Date(1985, 5, 28).getTime()), temperature: "36.51", tempIndex: 0, audioloops: 0};
        this.handler = this.handler.bind(this);
        this.updateStats = this.updateStats.bind(this);
     }

    handler() {
        this.setState((state: State) => ({
            displayStats: !state.displayStats,
        }), () => {
            if(this.state.displayStats) {
                this.updateStatsTimerId = setInterval(() => this.updateStats(), 500);     
            } else {
                clearInterval(this.updateStatsTimerId);
            }       
        });
    }

    shuffle(a: any[]) {
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
        this.setState((state: any) => {
            return {
                milliseconds: Math.abs(new Date().getTime() - new Date(1985, 5, 28).getTime()),
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
                        <p className="line-0">
                            Carbon based lifeform
                        </p>
                        <p className="line-1">
                            Species: Homo Sapiens
                        </p>
                        <p className="line-2">
                            Subsistence: <a href="https://www.google.com/search?q=C8H10N4O2" target="_blank" rel="noopener noreferrer">
                            C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>
                            </a> 
                        </p>
                        <p className="line-3">
                            Age: { this.state.milliseconds } ms
                        </p>
                        <p className="line-4">
                            Height: 1900 mm
                        </p>
                        <p className="line-5">
                            Core temp: { this.state.temperature } °C
                        </p>
                    </div>
                </div>
            )}
        </div>
        );
    }
}

export default Header;