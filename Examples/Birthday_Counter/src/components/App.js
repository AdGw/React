import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap'
import './App.css'
import AgeStats from './AgeStats'
class App extends Component{

    constructor(){
        super();
        this.state={
            newDate: '',
            birthday: '1993-07-01',
            showStats: false
        }
    }
    changeBirthday(){
        console.log(this.state)
        this.setState({
            birthday: this.state.newDate,
            showStats: true
        });
    }
    render(){
        return(
            <div className = "App">
                <h2>Input Your Birthday</h2>
                <Form inline className = "form">
                    <FormControl type = "date" onChange={event=>this.setState({
                        newDate: event.target.value
                    })}>
                    </FormControl>
                    { ' ' }
                    <Button onClick={()=>this.changeBirthday()}>
                        Submit
                    </Button>
                    {
                        this.state.showStats ?
                    <AgeStats date = {this.state.birthday}/>
                    : <div></div>
                    }
                </Form>
            </div>
        )
    }
}

export default App;