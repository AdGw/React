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

let Header = React.createClass({
    render : ()=>{
        return(
            <header>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
});

ReactDOM.render(<calculatePayment />, document.getElementById('root'));
