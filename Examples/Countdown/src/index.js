import React from 'react';
import ReactDOM from 'react-dom';

let countDown=()=>{
    <h1>Countodown to Christmas 2018</h1>
    let countDownDate = new Date("Dec 24, 2018 23:59:59").getTime(); 
    let x = setInterval(()=>{
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance/(1000*60*60*24));
        let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
        let seconds = Math.floor((distance%(1000*60))/1000);

        document.getElementById('root').innerHTML = days + " days " + hours + " hours " + minutes
        + " minutes " + seconds + " seconds ";
        if(distance < 0){
            clearInterval(x);
            document.getElementById('root').innerHTML= "EXPIRED";
        }
    },1000);
}
countDown();
ReactDOM.render(<countDown />, document.getElementById('root'));
