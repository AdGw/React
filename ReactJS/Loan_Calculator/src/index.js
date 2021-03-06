import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let calculatePayment =(principal, years, rate)=>{
    let monthlyRate = rate/100/12;
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1/(1+monthlyRate), years * 12)));
    let balance = principal;
    for(let y = 0 ; y<years; y++){
        let interestY = 0;
        let principalY = 0;
        for(let m = 0; m < 12; m++){
            let interestM = balance * monthlyRate;
            let principalM = monthlyPayment - interestM;
            interestY = interestY + interestM;
            principalY = principalY + principalM;
        }
    }
    return {monthlyPayment: monthlyPayment};
};
let createReactClass = require('create-react-class');
let Header = createReactClass({
    render : function(){
        return(
            <header>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
});

let MortgageCalculator = createReactClass({
    getInitialState: function(){
        return{
            principal: this.props.principal,
            years: this.props.years,
            rate: this.props.rate
        };
    },
    principalChange: function(event){
        this.setState({principal: event.target.value});
    },
    yearsChange: function(event){
        this.setState({years: event.target.value});
    },
    rateChange: function(event){
        this.setState({rate: event.target.value});
    },
    render: function(){
        let payment = calculatePayment(this.state.principal, this.state.years, this.state.rate);
        let monthlyPayment = payment.monthlyPayment;
        return(
            <div className = "content">
                <div className = "form">
                    <div>
                        <label>Principal:</label>
                        <input type = "text" value = {this.state.principal} onChange = {this.principalChange}/>
                    </div>
                    <div>
                        <label>Years:</label>
                        <input type = "text" value = {this.state.years} onChange = {this.yearsChange}/>
                    </div>
                    <div>
                        <label htmlFor = "rate">Rate:</label>
                        <input type = "text" value = {this.state.rate} onChange = {this.rateChange}/>
                    </div>
                </div>
                <h2>Monthly Payment: <span className = "currency">{Number(monthlyPayment.toFixed(2)).toLocaleString()}</span></h2>
            </div>
        );
    }
});

let App = createReactClass({
    render: ()=>{
        return(
            <div>
                <Header title = "React Loan Calculator"/>
                <MortgageCalculator principal = "200000" years = "30" rate = "5"/>
            </div>
        );
    }
});
ReactDOM.render(<App />, document.getElementById('root'));
