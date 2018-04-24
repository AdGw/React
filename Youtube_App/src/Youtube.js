import React, {Component} from 'react';
const API = 'AIzaSyAUWxQI4M2EkCph9Ot0oHIC3RIoCXCB8Bs';
const channelID = 'UCOuO2BhvznP6ogU7oDFGwpA';
const result = 10;
//&part=snippet,id&order=date&maxResults=10

let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`
class Youtube extends Component{

  constructor(props){
    super(props)
    this.state ={
      resultyt:[

      ]
    };
    this.clicked=this.clicked.bind(this);
  }
  clicked(){
    fetch(finalURL)
      .then((response) => response.json())
      .then((responseJson) => {
        const resultyt = responseJson.items.map(obj=> obj.id.videoId);
        this.setState({resultyt})
        console.log(this.state.resultyt);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){
    console.log(finalURL)
    return(
      <div>
        <button onClick ={this.clicked}>Get YT videos</button>
        <div className = "youtube">
          <iframe width="560" height="315"
            src="https://www.youtube.com/embed/c6t3bW7kx6E"
            frameBorder="0" allow="autoplay; encrypted-media"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    );
  }
}

export default Youtube;
