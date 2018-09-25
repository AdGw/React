import React, { Component } from 'react';
import {ControlLabel, FormGroup, FormControl, Button} from 'react-bootstrap';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInfo:{},
      editing: false
    }
  }
  componentDidMount(){
    let header = new Headers({
      "Content-Type":"application/json",
      "Authorization": "token 5a503a1f17491a909209057c40329cc233bf37e5"
    });
    return fetch('https://api.github.com/users/adgw',{
      method: 'GET',
      headers: header
    })
    .then(response => response.json())
    .then(json =>{
      this.setState({
        userInfo: json
      })
      console.log(json)
      console.log(this.state.name)
    })
    .catch(error=>{
      console.log(error)
    });
  }
  updateValue(type, event){
    let userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
    userInfoCopy[type] = event.target.value;
    this.setState({
      userInfo: userInfoCopy
    });
  }

  render() {
    return (
      <div className = "container">
        <Button bsStyle="primary" onClick={() => this.setState({
          editing: !this.state.editing
        })}>
        Edit</Button>
        {this.state.editing ?
        <FormGroup>
          <hr/>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.userInfo.name}
            placeholder="Enter text"
            onChange={this.updateValue.bind(this, 'name')}
          />
          <ControlLabel>Bio</ControlLabel>
          <FormControl
            type="text"
            value={this.state.userInfo.bio}
            placeholder="Enter text"
            onChange={this.updateValue.bind(this, 'bio')}
          />
          <ControlLabel>Location</ControlLabel>
          <FormControl
            type="text"
            value={this.state.userInfo.location}
            placeholder="Enter text"
            onChange={this.updateValue.bind(this, 'location')}
          />
          <ControlLabel>Company</ControlLabel>
          <FormControl
            type="text"
            value={this.state.userInfo.company}
            placeholder="Enter text"
            onChange={this.updateValue.bind(this, 'company')}
          />
        </FormGroup>
        : <div>
          <p><b>Name</b>: {this.state.userInfo.name}</p>
          <p><b>Bio</b>: {this.state.userInfo.bio}</p>
          <p><b>Location</b>: {this.state.userInfo.location}</p>
          <p><b>Company</b>: {this.state.userInfo.company}</p>
        </div>
        }
      </div>
    );
  }
}
export default Profile;
