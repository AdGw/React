import React, { Component } from 'react';
import './App.css';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
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
