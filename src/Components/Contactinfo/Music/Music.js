import React from 'react';
import './Music.scss';

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {displayMusic: false};
        this.handleMusicClick = this.handleMusicClick.bind(this);
    }

    handleMusicClick() {
        this.setState(state => ({
            displayMusic: !state.displayMusic,
        }), () => {
            this.scrollToBottom();
        });
    }
    
    
    bottomElement = React.createRef();

    scrollToBottom = () => {
        this.bottomElement.current.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <div className="music">
                <div className="music-container">
                    <span className="tone" onClick={this.handleMusicClick}></span>
                    {this.state.displayMusic 
                        ? <div className="spotify">
                            <p>I also like music. Here are some of my favourites 😎</p>
                            <iframe src="https://open.spotify.com/embed/user/hmol_/playlist/4o8JeOveTdtRBXFGFmeKxY" 
                                    width="300" 
                                    height="380" 
                                    allowtransparency="true" 
                                    allow="encrypted-media">
                            </iframe>
                            <div ref={this.bottomElement} />
                            </div>
                        :   <div ref={this.bottomElement} />
                    }
                </div>
            </div>
        )
    };
}

export default Music;