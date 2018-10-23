import React, { Component } from 'react'
import Mobs from '../data/Mobs.json'

class Selector extends Component {
    constructor(props){
        super(props);
        this.state = {exp: 0};
    }

handleChange = event =>{
    this.setState({exp: event.target.value});
    let updatedExp = event.target.value;
    console.log(updatedExp);
    return updatedExp;
  }

  render() {
    return (
      <div>
        <label className="input-select">Monsters</label><br/>
        <div className="input-group center-block">
            <select className = 'form-control' onChange={this.handleChange.bind(this)}>
                <option value={Mobs[0].exp} defaultValue = "selected">{Mobs[0].name}</option>
                <option value={Mobs[1].exp}>{Mobs[1].name}</option>
            </select>
        </div>
      </div>
    )
  }
}

export default Selector;