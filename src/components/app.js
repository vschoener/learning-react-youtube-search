import React, { Component } from 'react';
import YTSearch from 'youtube-api-v3-search';
import _ from 'lodash';

import SearchBar from './search-bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.apiKey = process.env.API_KEY;

    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  selectVideo = (selectedVideo) => {
    this.setState({selectedVideo});
  };

  searchVideo = async (term) => {
    if (!term || !term.length) {
      return;
    }

    const { items }  = await YTSearch(
      this.apiKey, {
        q: term,
      },
    );

    this.setState({
      videos: items,
      selectedVideo: items[0],
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={_.debounce(this.searchVideo, 300)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={this.selectVideo}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
