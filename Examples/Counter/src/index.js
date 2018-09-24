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
        this.props.handleTotal(this.props.price);
    },
    show:function(){
        this.props.handleShow(this.props.name);
    },
    render: function(){
        return(
            <div>
                <p>{this.props.name} - ${this.props.price}</p>
                <button onClick={this.buy}>Buy</button>
                <button onClick={this.show}>Show</button>
                <h4>Qty: {this.state.qty} item(s)</h4>
                <hr/>
            </div>
        );
    }
});

let Total = createReactClass({
    render: function(){
        return(
            <div>
                <h3>Total Cash: ${this.props.total}</h3>
            </div>
        );
    }
});

let ProductList = createReactClass({
    getInitialState:function(){
        return{total :0};
    },
    showProduct:function(name){
        alert('You selected ' + name);
    },
    calculateTotal:function(price){
        this.setState({
            total: this.state.total + price
        });
    },
    render: function(){
        return(
        <div>
            <Product name = "Game" price = {100} 
            handleShow={this.showProduct}
            handleTotal={this.calculateTotal}/>
            <Product name = "Apple" price = {800} 
            handleShow={this.showProduct}
            handleTotal={this.calculateTotal}/>
            <Product name = "Nokia" price = {150} 
            handleShow={this.showProduct}
            handleTotal={this.calculateTotal}/>
            <Total total= {this.state.total}/>
        </div>   
        );
    }
});

ReactDOM.render(<ProductList />, document.getElementById('root'));

