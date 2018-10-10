import React, { Component } from 'react';
import './App.css';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home'

class App extends Component {
  static defaultProps = {
    clientId: '3ZTSqbhIGyIwGS-LItUYNAwWPiEaZDi3',
    domain: 'adgw.eu.auth0.com'

  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
    this.lock.on('authenticated', (authResult)=>{
      this.lock.getProfile(authResult.idToken, (error, profile)=>{
        console.log('x')
        if(error){
          console.log(error);
          return;
        }
        this.setData(authResult.idToken, profile);
      });
    });
    this.getData();
  }

  getData(){
    if(localStorage.getItem('idToken') !== null){
      this.setState({
        idToken: localStorage.getItem('idToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, ()=>{
        console.log(this.state)
      });
    }
  }

  setData(idToken, profile){
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  showLock(){
    this.lock.show();
  }

  render() {
    return (
      <div className="App">
        <Header onLoginClick = {this.showLock.bind(this)}/>
        <Grid>
            <Row>
              <Col xs = {12} md = {12}>
                <Home/>
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
