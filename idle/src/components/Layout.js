import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import HeroList from './HeroList'
import '../App.css'

class Layout extends Component {
  render() {
     
    return (
      <div className="layout">
        <Grid className="show-grid layout">
            <Row >
                <Col xs = {2} sm={2} md={2}>   
                    Profession
                    <br />
                    <HeroList/>
                </Col>
                <Col xs = {2} sm={2} md={2}>
                    Level
                    <br />
                </Col>
                <Col xs = {2} sm={2} md={2}>
                    Hp
                    <br/>
                </Col>
                <Col xs = {2} sm={2} md={2}>
                    Mana
                    <br />
                </Col>
                <Col xs = {2} sm={2} md={2}>
                    Dmg
                    <br />
                </Col>
                <Col xs = {2} sm={2} md={2}>
                    Items
                    <br />
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default Layout;
