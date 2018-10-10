import React, { Component } from 'react';
import './App.css';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

class App extends Component {
  constructor(){
    super();
    this.state = {
      idToken: '',
      profile:{}
    }
  }
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

  logout(){
    this.setState({
      idToken: '',
      profile: ''
    },()=>{
      localStorage.removeItem('idToken');
      localStorage.removeItem('profile');
    })
  }

  render() {
    let page;
    if(this.state.idToken){
      page = <Dashboard 
        lock = {this.lock}
        idToken = {this.idToken}
        profile = {this.profile}
      />
    }else{
      page = <Home/>
    }
    return (
      <div className="App">
        <Header 
        lock={this.lock} idToken = {this.state.idToken} profile = {this.state.profile}
        onLoginClick = {this.showLock.bind(this)}
        onLogoutClick = {this.logout.bind(this)}/>
        <Grid>
            <Row>
              <Col xs = {12} md = {12}>
                {page}
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
