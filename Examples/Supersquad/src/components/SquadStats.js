import React, {Component} from 'react';
import {connect} from 'react-redux'

class SquadStats extends Component{
    strength(){
        let strength = 0;
        this.props.heroes.forEach(hero => strength += hero.strength)
           return strength; 
    }
    speed(){
        let speed = 0;
        this.props.heroes.forEach(hero => speed += hero.speed)
           return speed; 
    }
    intelligence(){
        let intelligence = 0;
        this.props.heroes.forEach(hero => intelligence += hero.intelligence)
           return intelligence; 
    }

    render(){
        return(
            <div>
                <h4>Squad Stats</h4>
                <ul className = "list-group">
                    <li className = "list-group-item left">
                        <b>Overall Strength: {this.strength()}</b><br/>
                        <b>Overall Speed: {this.speed()}</b><br/>
                        <b>Overall Intelligence: {this.intelligence()}</b><br/>
                    </li>
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        heroes: state.heroes
    } 
}

export default connect(mapStateToProps, null)(SquadStats);