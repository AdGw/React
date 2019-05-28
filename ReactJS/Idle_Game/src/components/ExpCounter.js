import React, { Component } from 'react'
import Mobs from '../data/Mobs.json'
import handleChange from '../components/Selector'

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
          exp: prevState.exp + this.getExpFromMob(),
          name: this.getNamefromMob()
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
                    {/* {console.log(this.state.name)}
                    {console.log(this.state.exp)} */}
                    {this.props.exp} 
                </div>
            </div>
        )
    }
}


export default ExpCounter