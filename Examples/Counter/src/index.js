import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let createReactClass = require('create-react-class');
let Product = createReactClass({
    getInitialState: ()=>{
        return {qty: 0}
    },
    buy: function(){
        this.setState({
            qty: this.state.qty +1
        });
    },
    render: function(){
        return(
            <div>
                <p>Game - $50</p>
                <button onClick={this.buy}>Buy</button>
                <h4>Qty: {this.state.qty} item(s)</h4>
            </div>
        );
    }
});

ReactDOM.render(<Product />, document.getElementById('root'));

