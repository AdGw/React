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

let ProductForm = createReactClass({
    submit:function(e){
        e.preventDefault();
        let product ={
            name : this.refs.name.value,
            price: parseInt(this.refs.price.value)
        }
        this.props.handleCreate(product);
        this.refs.name.value = "";
        this.refs.price.value = "";
    },
    render: function(){
        return(
            <form onSubmit={this.submit}>
                <input type = "text" placeholder = "Product Name" ref = "name"/> - {" "}
                <input type = "text" placeholder = "Product Price" ref = "price"/>
                <br/>
                <button >Create Product</button>
            </form>
        );
    },
});

let ProductList = createReactClass({
    getInitialState:function(){
        return{
            total :0,
            productList:[
                {
                    name: "Game", price :100
                },{
                    name: "Apple", price: 800
                },{
                    name: "Nokia", price: 150
                }
            ]
        };
    },

    createProduct: function(product){
        this.setState({
            productList: this.state.productList.concat(product)
        })
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
        let component = this;
        let products = this.state.productList.map(function(product){
            return(
                <Product name = {product.name} price = {product.price}
                handleShow={component.showProduct}
                handleTotal={component.calculateTotal}/>
            );
        })
        return(
        <div>
            <ProductForm handleCreate = {this.createProduct}/>
            {products}
            <Total total= {this.state.total}/>
        </div>   
        );
    }
});

ReactDOM.render(<ProductList />, document.getElementById('root'));

