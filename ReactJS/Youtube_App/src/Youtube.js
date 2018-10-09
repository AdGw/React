import React, {Component} from 'react';
const API = 'AIzaSyAUWxQI4M2EkCph9Ot0oHIC3RIoCXCB8Bs';
const channelID = 'UCOuO2BhvznP6ogU7oDFGwpA';
const result = 5;

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
        const resultyt = responseJson.items.map(obj=>"https://www.youtube.com/playlist?list="+obj.id.playlistId+"&output=embed");
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
        <button onClick ={this.clicked}>Get YT playlists</button>
        {
          this.state.resultyt.map((link,i)=>{
            console.log(link);
            let frame = <div key = {i} className = "youtube"><iframe width="800" height="600" src={link} frameBorder="0"></iframe></div>
            return frame;
          })
        }
        {this.frame}
      </div>
    );
  }
}

export default Youtube;
