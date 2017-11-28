import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

function PlayButton(props) {
    const className = props.isMusicPlaying ? 'play is-active' : 'play';
    return <a
                onClick={props.onClick}
                href="#" title="Play video" className={className}
            />;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isMusicPlaying: false };
        this.handleClick = this.handleClick.bind(this);
    }
    // handleClick(){
    //     if (this.state.isMusicPlaying) {
    //         this.setState({ isMusicPlaying: false });
    //     } else {
    //         this.setState({ isMusicPlaying: true });
    //     }
    // }
    handleClick() {
        this.setState(prevState => {
            return {
                isMusicPlaying: !prevState.isMusicPlaying
            };
        });
    };
    render() {
        const status = this.state.isMusicPlaying ? 'Playing' : 'Not playing';
        return (
            <div>
                <h1 onClick={this.handleClick}>{ status }</h1>
                <PlayButton
                    onClick={this.handleClick}
                    isMusicPlaying={this.state.isMusicPlaying}
                />
            </div>
        );
    }
}

export default App;
