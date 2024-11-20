import React, { Component, createRef } from 'react';
import songList from '../utils/songList';

const left = '<<';
const right = '>>';
const less = '-';
const more = '+';
let infoTimeout;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMode: '||',
      songIndex: 0,
      infoStatus: 'trackInfo',
    };

    this.audioRef = createRef();
  }

  componentDidMount() {
    if (this.audioRef.current) {
      this.audioRef.current.src = songList[this.state.songIndex].url;
      this.audioRef.current.load();
      this.audioRef.current.addEventListener('loadeddata', () => {
        this.audioRef.current.play();
        this.audioRef.current.volume = 0.5;
      });
      this.audioRef.current.addEventListener(
        'ended',
        () => {
          this.handleAudioChange('next');
        },
        false,
      );
    }

    infoTimeout = setTimeout(() => {
      this.setState({
        infoStatus: 'trackInfo hidden',
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(infoTimeout);
  }

  handleAudioChange(direction) {
    let newIndex;

    if (infoTimeout !== undefined) clearTimeout(infoTimeout);

    this.audioRef.current.paused
      ? this.setState({ currentMode: '||' })
      : this.audioRef.current.pause();

    if (direction === 'next') {
      if (this.state.songIndex === songList.length - 1) {
        newIndex = 0;
      } else newIndex = this.state.songIndex + 1;
    } else if (direction === 'prev') {
      if (this.state.songIndex === 0) {
        newIndex = songList.length - 1;
      } else newIndex = this.state.songIndex - 1;
    }

    this.setState({ infoStatus: 'trackInfo', songIndex: newIndex }, () => {
      this.audioRef.current.src = songList[this.state.songIndex].url;
      this.audioRef.current.load();
      this.audioRef.current.addEventListener('loadeddata', () => {
        this.audioRef.current.play();
      });
    });

    infoTimeout = setTimeout(() => {
      this.setState({
        infoStatus: 'trackInfo hidden',
      });
    }, 5000);
  }

  handlePlayPause() {
    switch (this.state.currentMode) {
      case '►':
        this.audioRef.current.play();
        this.setState({ currentMode: '||' });
        break;
      case '||':
        this.audioRef.current.pause();
        this.setState({ currentMode: '►' });
        break;
      default:
    }
  }

  render() {
    return (
      <div className="Header">
        <div className="controls">
          <audio ref={this.audioRef} />
          <button type="button" onClick={() => this.handleAudioChange('prev')}>
            {left}
          </button>
          <button type="button" onClick={() => this.handlePlayPause()}>
            {this.state.currentMode}
          </button>
          <button type="button" onClick={() => this.handleAudioChange('next')}>
            {right}
          </button>
        </div>
        <div className={this.state.infoStatus}>
          <p>
            {songList[this.state.songIndex].artist.name}
            &nbsp; - &nbsp;
            {songList[this.state.songIndex].artist.song}
          </p>
        </div>
        <div className='header-message'>
          <p>Happy Birthday Hon 🥳🎉</p>
        </div>
      </div>
    );
  }
}

export default Header;
