import React from 'react';
import './Terminal.scss';
import TerminalLine from './TerminalLine/TerminalLine';

class Terminal extends React.Component {
    render() {
        return (
			<div className="terminal">
			<div className="terminal-header">
			</div>
			<div className="terminal-container">
					<TerminalLine command="henrik.work"
												print="Fullstack developer/consultant at ITverket">
					</TerminalLine>
					<TerminalLine command="henrik.education"
												print="Bachelor Informatics, Oslo University College (HiO)">
					</TerminalLine>
					<TerminalLine command="henrik.resume"
												print="henrik-cv.pdf"
												href="https://github.com/hmol/Curriculum-Vitae/raw/master/henrik_cv.pdf	">
					</TerminalLine>

					<TerminalLine command="henrik.currentLocation"
												print="59.913868,10.752245"
												href="https://www.google.com/maps/place/Oslo/">
					</TerminalLine>
					<div className="terminal-line">
						<div className="terminal-command">
							henrik.interests
						</div>
						<div className="terminal-print">
							["<a href="https://open.spotify.com/embed/user/hmol_/playlist/4o8JeOveTdtRBXFGFmeKxY" 
							target="_blank" rel="noopener noreferrer">music</a>", "<a href="https://www.imdb.com/list/ls090420886/" target="_blank" rel="noopener noreferrer">movies</a>", "football", "hiking"]
						</div>
					</div>

			  <div className="terminal-line">
					<div className="terminal-command">
						<span className="char">
							&nbsp;
						</span>
					</div>
			  </div>
			</div>
		  </div>
        );  }
}

export default Terminal;