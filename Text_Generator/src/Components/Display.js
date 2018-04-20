import React, {Component} from 'react';

class Display extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }
  render(){
    return(
      <div className="display">
        {this.props.value}
      </div>
    )
  }
}

export default Display;
