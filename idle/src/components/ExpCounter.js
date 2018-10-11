import React, { Component } from 'react'
import Mobs from '../data/Mobs.json'
import {Grid, Row, Col} from 'react-bootstrap';

class ExpCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { exp: 0 };
      }

      getExpFromMob(mobs){
          mobs = Mobs[0].exp;
          return mobs;
      }

      tick(mobs) {
        this.setState(prevState => ({
          exp: prevState.exp + this.getExpFromMob()
        }));
      }

      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

      render() {
        // let mobs = Mobs[0].exp;
        // console.log(mobs);
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