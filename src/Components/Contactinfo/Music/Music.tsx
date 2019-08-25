import React from 'react';
import './Music.scss';
import TrackVisibility from 'react-on-screen'; 

export interface Props {
 
}

export interface State {
    displayMusic: boolean;
}


class Music extends React.Component<Props, State> {
    bottomElement: React.RefObject<any> = React.createRef();

    constructor(props: Props) {
        super(props);
        this.state = {displayMusic: false};
        this.handleMusicClick = this.handleMusicClick.bind(this);
        // this.bottomElement = React.createRef();
    }

    handleMusicClick() {
        this.setState(state => ({
            displayMusic: !state.displayMusic,
        }), () => {
            this.scrollToBottom();
        });
    }

    scrollToBottom = () => {
        this.bottomElement.current.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <div className="music">
                <div className="music-container">                   
                    {this.state.displayMusic 
                        ? <div className="spotify">
                            <p>I also like music. Here are some of my favourites <span role="img" aria-label="emoji">😎</span></p>
                            <iframe src="https://open.spotify.com/embed/user/hmol_/playlist/4o8JeOveTdtRBXFGFmeKxY" 
                                    width={300}
                                    height={380}
                                    allowTransparency={true}
                                    title="spotify-iframe"
                                    allow="encrypted-media">
                            </iframe>

                            </div>
                        :   

                                <span className="tone" onClick={this.handleMusicClick}></span>
                           
                    }

                    <div ref={this.bottomElement} />

                </div>
            </div>
        )
    };
}

export default Music;