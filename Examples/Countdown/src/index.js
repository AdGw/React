import React from 'react';
import ReactDOM from 'react-dom';

let countDown=()=>{
    <h1>Countodown to Christmas 2018</h1>
    let countDownDate = new Date("Dec 24, 2018 23:59:59").getTime(); 
    let x = setInterval(()=>{
        let now = new Date().getTime();
        let distance = countDownDate - now;
    });
}

ReactDOM.render(<countDown />, document.getElementById('root'));
