import React, { Component } from 'react'
import Mobs from '../data/Mobs.json'

class ExpCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { exp: 0, name: '' };
      }

      getExpFromMob(expMonster){
        expMonster = Mobs[1].exp;
          return expMonster;
      }
      getNamefromMob(nameMonster){
        nameMonster = Mobs[1].name;
        return nameMonster;
      }

      tick() {
        this.setState(prevState => ({
          exp: prevState.exp + this.getExpFromMob()
        }));
      }

      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 300);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }
      
      render() {
          return(
            <div>
                <div>
                    {this.state.exp} 
                </div>
            </div>
        )
    }
}


export default ExpCounter