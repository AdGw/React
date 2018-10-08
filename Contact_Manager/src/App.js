import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Grid>
          <Row>
            <Col xs = {12} md = {12} lg = {12}> 
              App
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
