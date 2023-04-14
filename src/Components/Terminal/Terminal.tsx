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
					<TerminalLine command="henrik.currentWork"
												print="Developer at Kron">
					</TerminalLine>
					<TerminalLine command="henrik.education"
												print="Bachelor Informatics, Oslo University College (HiO)">
					</TerminalLine>
					<TerminalLine command="henrik.resume"
												print="henrik-cv-NO.pdf"
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
							["<a href="https://open.spotify.com/playlist/4o8JeOveTdtRBXFGFmeKxY?si=2K1fpj8eSoe9svLb6v-1dw" target="_blank" rel="noopener noreferrer">music</a>",
							 "<a href="https://www.imdb.com/list/ls090420886/" target="_blank" rel="noopener noreferrer">movies</a>", 
							 "<a href="https://www.imdb.com/list/ls093266815/" target="_blank" rel="noopener noreferrer">series</a>", 
							 "<a href="https://www.goodreads.com/user/show/87968877-henrik-molnes" target="_blank" rel="noopener noreferrer">books</a>", 
							 "hiking"
							]
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
