import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './components/SearchBar/search_bar'
import VideoList from './components/VideoList/video_list'
import VideoDetail from './components/Video/video_detail'
import YTSearch from 'youtube-api-search'
import registerServiceWorker from './registerServiceWorker';
import _ from 'lodash';
const YT_API_KEY = "AIzaSyB_3xM8R-1g6pBCUa0RnVEJpDRrQJtbs2U";

class App extends React.Component
{
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null,
      isPlaying: false
    } 
    this.videoSearch('cake')
  }
  
  componentDidMount = () => {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  videoSearch = (term) => {
    YTSearch({ key: YT_API_KEY, term: term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0],
        isPlaying: false
      })
    })
  }

  handleKeyPress = (event) => {
    if (event.keyCode === 32){
      this.setState({
        isPlaying: !this.state.isPlaying
      });
      console.log(event.keyCode);
    };
  };

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 500);

    return(
      <div className="container">
        <div className="row">
          <SearchBar onSearchTermChange={videoSearch} />
        </div>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} isPlaying={this.state.isPlaying} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
