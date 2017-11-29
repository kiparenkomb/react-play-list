import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import PlayListTracks from './components/PlayListTracks';

const store = createStore (allReducers);

function PlayButton(props) {
    const className = props.isMusicPlaying ? 'play is-active' : 'play';
    const titleName = props.isMusicPlaying ? 'Stop music' : 'Play music';
    return <a
                onClick={props.onClick}
                href="#"
                title={titleName}
                className={className}
            />;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMusicPlaying: false,
            autoPlayAudio: true,
            loopAudio: false,
            srcAudio : ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleOnFileUpload = this.handleOnFileUpload.bind(this);
    }
    handleOnFileUpload(e) {
        const { files } = e.target;
        // console.log(files);
        if (files.length === 0) {
            this.setState({
                srcAudio: '',
                isMusicPlaying: false
            });
            // console.log('target none');
            return false;
        } else {
            this.setState({
                srcAudio: URL.createObjectURL(files[0]),
                isMusicPlaying: true
            });
        }
        // this.audio.onended = () => {
        this.audio.onended = () => {
            this.setState({
                isMusicPlaying: false
            });
        };

    }
    handleClick(event) {
        event.preventDefault();
        if (this.state.srcAudio.length) {
            if (this.state.isMusicPlaying) {
                this.audio.pause();
            } else {
                this.audio.play();
            }
            this.setState(prevState => {
                return {
                    isMusicPlaying: !prevState.isMusicPlaying
                };
            });
        } else {
            return false;
        }
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
                <h1>Play Music</h1>
                <input
                    ref="file"
                    type="file"
                    onChange={this.handleOnFileUpload} />
                <audio
                    id="audio"
                    src={ this.state.srcAudio }
                    ref={(audioTag) => { this.audio = audioTag }}
                    autoPlay={ this.state.autoPlayAudio }
                    loop={ this.state.loopAudio } />
                <Provider store={store}>
                    <PlayListTracks />
                </Provider>
            </div>
        );
    }
}

export default App;
