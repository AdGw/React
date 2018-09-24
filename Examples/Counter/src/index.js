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
                <hr/>
            </div>
        );
    }
});

let Total = createReactClass({
    render: ()=>(
        <div>
            <h3>Total Cash: </h3>
        </div>
    )
});

let ProductList = createReactClass({
    render: ()=>(
        <div>
            <Product/>
            <Product/>
            <Product/>
        </div>   
    )
});

ReactDOM.render(<ProductList />, document.getElementById('root'));

