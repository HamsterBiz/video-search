import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

class App extends React.Component {

    state = { videos : [] , selectedVideo: null }

    handelSubmit = async term => {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
            params:{
                part: 'snippet' ,
                maxResults: 5 ,
                key: "AIzaSyBULUFWIVJ-iE71F0x_NTNgB11sdTp2fUs",
                q: term
            }
        });

        this.setState({
            videos : response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    componentDidMount() {
        this.handelSubmit('welcome 2020');
    }

    onVideoSelect= (video) => {
        this.setState( {selectedVideo: video} )
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.handelSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos} />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;