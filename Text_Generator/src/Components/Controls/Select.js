import React, {Component} from 'react';

class Select extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }

  onChange(ev){
    this.setState({value: ev.target.value}, function(){
      this.props.onChange(this.state.value);
    })
  }

  render(){
    return(
      <div>
        <select className="form-control" onChange={this.onChange.bind(this)}>
          <option value = "true">Yes</option>
          <option value = "false">No</option>
        </select>
      </div>
    )
  }
}

export default Select;
