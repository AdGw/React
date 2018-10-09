import React, { Component } from 'react'
import './App.css'
import Chart from './component/Chart'

class App extends Component {
    constructor(){
        super();
            this.state ={
                data:[100,50,48,33,65,2,17,44]
            }
        }
    render() {
        return (
            <div>
                <Chart data = {this.state.data}/>
            </div>
        )
    }    
}

export default App;