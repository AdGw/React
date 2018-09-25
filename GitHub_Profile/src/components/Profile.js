import React, { Component } from 'react';

class Profile extends Component {

    componentDidMount(){
        let header = new Headers({
            "Content-Type":"application/json",
            "Authorization": "token dae859cfa9adc4466528b3515a8749612435256d"
        });
        return fetch('https://api.github.com/users/adgw',{
            method: 'GET',
            headers: header
        })
        .then(response => response.json())
        .then(json =>{
            console.log(json)
        })
        .catch(error=>{
            console.log(error)
        });
    }

    render() {
        return (
            <div>
                <p>Profile</p>
            </div>
        );
    }
}

export default Profile;
