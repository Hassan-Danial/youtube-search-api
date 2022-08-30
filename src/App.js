import './App.css';
import Search from './components/Search.js'
import React from 'react';
import youtubeApi from './API/youtube_api.js'
import YoutubeVideoPlayer from './components/YoutubeVideoPlayer';
import VideoList from './components/VideoList.js';

class App extends React.Component {

  state = {
    video_info: [],
    select_video_id: null,
    playlist: null
  };
  onVideoSelected = video_id => {
    this.setState({
      select_video_id: video_id
    })
  }
  onSearch = async keyword => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: keyword
      }
    })

    this.setState({
      video_info: response.data.items,
      select_video_id: response.data.items[0].id.videoId
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />
        <VideoList onVideoSelected={this.onVideoSelected} data={this.state.video_info} />
        <YoutubeVideoPlayer playlist={this.state.playlist} videoId={this.state.select_video_id} data={this.state.video_info} />

      </div>
    );
  }
}

export default App;
