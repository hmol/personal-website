import React from 'react';
import './TerminalLine.scss';

class TerminalLine  extends React.Component<TerminalLineProps> {
    render() {
		let terminalPrint = <span>{this.props.print}</span>;
		if(this.props.href) {
			terminalPrint = <a href={this.props.href}>{this.props.print}</a>
		}
        return (			
				<div className="terminal-line">
					<div className="terminal-command">
						{this.props.command}
					</div>
					<div className="terminal-print">
						"{terminalPrint}"
					</div>
			  </div>
        );  }
}

export default TerminalLine;
type TerminalLineProps = {
	command: string,
	print: string,
	href?: string
}