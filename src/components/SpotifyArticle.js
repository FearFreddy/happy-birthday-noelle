import React, { Component } from 'react';
import axios from 'axios';

class SpotifyArticle extends Component {
  constructor() {
    super();
    this.state = {
      playlist: '',
    };
    this.handleNextTrack = this.handleNextTrack.bind(this);
  }

  componentDidMount() {
    const paramsString = 'grant_type=refresh_token&refresh_token=AQAGcqiANRrUCxGgKMOIwC4fiDyJZF_5nhMhzyRizxXNNqMWxsNQCG8GoVgriHYAvPJHw0hX6PN0O2VOXPii16GoMS4U8ZX3r26GajCxnwo0g20w-k5Kg1Xd3gm_-qK0B8k';
    const searchParams = new URLSearchParams(paramsString);
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios
      .post('https://accounts.spotify.com/api/token', searchParams, {
        auth: {
          username: 'd3b88422318b4cbba82d28617ba2f30a',
          password: '35b559cdfa9142999c58f3404ad88708',
        },
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        axios
          .get(
            'https://api.spotify.com/v1/users/21su5bleb7qmyshijvmjqplcy/playlists/58tSMgHsZ6qbK93pThx1u5',
            {
              headers: {
                Authorization: `Bearer ${response.data.access_token}`,
              },
            },
          )
          .then((res) => {
            this.setState({
              playlist: `https://open.spotify.com/embed?uri=${res.data.uri}`,
            });
          });
      });
  }

  handleNextTrack() {
    const { linkIndex, links } = this.state;
    if (linkIndex === links.length - 1) {
      this.setState({ linkIndex: 0 });
    } else {
      this.setState(prev => ({ linkIndex: prev.linkIndex + 1 }));
    }
  }

  render() {
    return (
      <div className="container">
        <div className="header spotifyHeader">
          <h1>Recent tracks</h1>
        </div>
        <div className="article">
          <iframe src={this.state.playlist} frameBorder="0" />
        </div>
      </div>
    );
  }
}

export default SpotifyArticle;
