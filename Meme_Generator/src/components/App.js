import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../styles/style.css'
import MemeItem from './MemeItem'
import {Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

class App extends Component {
  constructor(){
    super();
    this.state = {
      memeLimit: 10,
      text0: '',
      text1: ''
    }
  }
  render() {
    return (
      <div>
        <h4><i>Write some text</i></h4>
        <Form>
          <FormGroup>
            <ControlLabel >
              Top
            </ControlLabel>
            {' '}
            <FormControl type = "text" onChange={event=> this.setState({
              text0: event.target.value
            })}>

            </FormControl>
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>
              Bottom
            </ControlLabel>
            {' '}
            <FormControl type = "text" onChange={event=> this.setState({
              text1: event.target.value
            })}>
            </FormControl>
          </FormGroup>
        </Form>
        {
          this.props.memes.slice(0,this.state.memeLimit).map((meme, index)=>{
            return(
              <MemeItem key = {index} meme = {meme}/>
            )
          })
        }
        <div className="meme-button" onClick = {()=>{
          this.setState({memeLimit: this.state.memeLimit+10
          })
        }}>
        Load More ...</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, null)(App);